import "./FormStyles.css";
import Modal from "./Modal";
import { useState } from "react";
import MyComponent from "./MyComponent";
import { LoanInputContext } from "./contexts/LoanFormInputContext";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

export default function LoanForm() {
  const userData = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });

  function handleFormSubmit(event) {
    event.preventDefault();
    setErrorMessage(null);
    const { age, phoneNumber } = loanInputs;
    if (age < 18 || age > 100) {
      setErrorMessage("The age is not allowed");
    } else if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      setErrorMessage("Phone Number Format Is Incorrect");
    }
    setShowModal(true);
  }

  const btnIsDisabled =
    loanInputs.name === "" ||
    loanInputs.age === "" ||
    loanInputs.phoneNumber === "";

  function handleDivClick() {
    console.log("div clicked");
    if (showModal) {
      setShowModal(false);
    }
  }
    function handlePhoneNumberInputChange(value) {
    setLoanInputs({ ...loanInputs, phoneNumber: value });
  }
  return (
    <div
      onClick={handleDivClick}
      className="flex"
      style={{ flexDirection: "column" }}
    >
       <h1 style={{ color: "white" }}>Hello {userData.name}</h1>
      <form id="loan-form" className="flex" style={{ flexDirection: "column" }}>
        <h1>Requesting a Loan</h1>
        <hr></hr>

        <label>Name:</label>
        <input
          value={loanInputs.name}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, name: event.target.value });
          }}
        />

         <LoanInputContext.Provider
          value={{
            value: loanInputs.phoneNumber,
            handleChange: handlePhoneNumberInputChange,
            labelTitle: "Phone Number",
          }}
        >
          <MyComponent />
        </LoanInputContext.Provider>

        <label>Age:</label>
        <input
          value={loanInputs.age}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, age: event.target.value });
          }}
        />

        <label style={{ marginTop: "30px" }}>Are you an employee?</label>
        <input
          type="checkbox"
          checked={loanInputs.isEmployee}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, isEmployee: event.target.checked });
          }}
        />

        <label>Salary:</label>
        <select
          value={loanInputs.salaryRange}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, salaryRange: event.target.value });
          }}
        >
          <option>less than 500$</option>
          <option>between 500$ and 2000</option>
          <option>above 2000</option>
        </select>

        <button
          className={btnIsDisabled ? "disabled" : ""}
          onClick={handleFormSubmit}
          disabled={btnIsDisabled}
          id="submit-loan-btn"
        >
          Submit
        </button>
      </form>

      <Modal errorMessage={errorMessage} isVisible={showModal} />
    </div>
  );
}