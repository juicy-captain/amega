import { FC, FormEvent, useRef, useState } from "react";
import { InvalidIP, SearchButton, SearchForm, SearchInput } from "./styled";

interface IProps {
  ip?: string;
  update: any;
}

export const Search: FC<IProps> = ({ ip, update }) => {
  const [value, setValue] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);
  const ipRegex =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const inputIP = useRef<HTMLInputElement>(null);
  const checkIP = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!ipRegex.test(value)) {
      setIsValid(false);
      return;
    } else {
      setIsValid(true);
    }
    if (ip === value) return;
    update(value);
  };

  return (
    <>
      <SearchForm
        onSubmit={(e) => {
          checkIP(e);
        }}>
        <SearchInput
          ref={inputIP}
          type="text"
          placeholder={ip}
          value={value}
          onChange={changeHandler}
        />
        <SearchButton type="submit" className={ip === value ? "disabled" : ""}>
          IP Lookup
        </SearchButton>
      </SearchForm>
      {!isValid && <InvalidIP>Invalid IP!</InvalidIP>}
    </>
  );
};
