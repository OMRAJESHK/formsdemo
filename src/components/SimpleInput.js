import React, { useState, useRef } from "react";

const SimpleInput = () => {
  const nameInputRef = useRef();
  const [state, setState] = useState({ name: "", email: "" });

  const [nameInputTouched, setNameInputTouched] = useState(false);
  const [emailInputTouched, setEmailInputTouched] = useState(false);

  // Name validity
  const nameIsValid = state.name.trim() !== "";
  const nameInputIsInvalid = !nameIsValid && nameInputTouched;

  // Email validity
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const emailIsValid = validateEmail(state.email.trim());
  const emailInputIsInvalid = !emailIsValid && emailInputTouched;

  //Form Validity
  const isFormValid = nameIsValid && emailIsValid ? true : false;

  const onChangeHandler = (event) => {
    const { value, name } = event.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onNameBlurHandler = (e) => setNameInputTouched(true);
  const onEmailBlurHandler = (e) => setEmailInputTouched(true);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setNameInputTouched(true);
    if (!nameIsValid) return;
    setState({ name: "", email: "" });
    setNameInputTouched(false);
    setEmailInputTouched(false);
  };

  const nameClass = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  const emailClass = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameClass}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={onChangeHandler}
          onBlur={onNameBlurHandler}
          ref={nameInputRef}
          name="name"
          value={state.name}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty...!</p>
        )}
      </div>
      <div className={emailClass}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          onChange={onChangeHandler}
          onBlur={onEmailBlurHandler}
          ref={nameInputRef}
          name="email"
          value={state.email}
        />
        {emailInputIsInvalid && (
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
