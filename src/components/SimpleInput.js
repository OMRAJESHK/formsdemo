import React from "react";
import useInput from "../hooks/useInput";

const SimpleInput = () => {
  const validateValue = (value) => value.trim() !== "";
  // NameInput
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetInput,
  } = useInput(validateValue);

  // Email validity
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  // EmailInput
  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(validateEmail);

  //Form Validity
  const isFormValid = nameIsValid && emailIsValid ? true : false;

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!nameIsValid || !emailIsValid) return;
    console.log("submitData", name, email);
    resetInput();
  };

  const nameClass = nameInputHasError ? "form-control invalid" : "form-control";
  const emailClass = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameClass}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          name="name"
          value={name}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty...!</p>
        )}
      </div>
      <div className={emailClass}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          name="email"
          value={email}
        />
        {emailInputHasError && (
          <p className="error-text">Email must not be empty...!</p>
        )}
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
