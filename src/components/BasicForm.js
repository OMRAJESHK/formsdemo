import React, { useState } from "react";
import useInput from "../hooks/useInput";

const BasicForm = (props) => {
  // fname
  const nameValidation = (value) => value.trim() !== "";
  const {
    value: fname,
    isValid: fnameIsValid,
    hasError: fnameInputHasError,
    onChangeHandler: fnameInputChangeHandler,
    onInputBlurHandler: fnameInputBlurHandler,
    reset,
  } = useInput(nameValidation);

  // lname
  const lnameValidation = (value) => value.trim() !== "";
  const {
    value: lname,
    isValid: lnameIsValid,
    hasError: lnameInputHasError,
    onChangeHandler: lnameInputChangeHandler,
    onInputBlurHandler: lnameInputBlurHandler,
  } = useInput(lnameValidation);

  // email
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    onChangeHandler: emailInputChangeHandler,
    onInputBlurHandler: emailInputBlurHandler,
  } = useInput(validateEmail);

  //Form Validity
  const isFormValid =
    fnameIsValid && lnameIsValid && emailIsValid ? true : false;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("formcontrolsError", fnameIsValid, lnameIsValid, emailIsValid);
    if (!isFormValid) return;
    console.log("studentData", fname, lname, email);
    reset();
  };
  const fnameClass = fnameInputHasError
    ? "form-control invalid"
    : "form-control";
  const lnameClass = lnameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailClass = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <div className={fnameClass}>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            onChange={fnameInputChangeHandler}
            value={fname}
            onBlur={fnameInputBlurHandler}
          />
          {fnameInputHasError && (
            <p className="error-text">First Name must not be empty...!</p>
          )}
        </div>
        <div className={lnameClass}>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lname"
            onChange={lnameInputChangeHandler}
            value={lname}
            onBlur={lnameInputBlurHandler}
          />
          {lnameInputHasError && (
            <p className="error-text">Last Name must not be empty...!</p>
          )}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={emailInputChangeHandler}
          value={email}
          onBlur={emailInputBlurHandler}
        />
        {emailInputHasError && <p className="error-text">Invalid Email...!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
