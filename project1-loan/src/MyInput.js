import { useContext } from "react";
import { LoanInputContext } from "./contexts/LoanFormInputContext";
export default function MyInput() {
  const inputContext = useContext(LoanInputContext);

  return (
    <>
        <label>{inputContext.labelTitle}</label>
        <input
          value={inputContext.value}
          onChange={(event) => {
            inputContext.handleChange(event.target.value);
          }}
        />
    </>
  );
}