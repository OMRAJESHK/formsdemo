import React, { useEffect, useState, useRef } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [name, setName] = useState("");
  const [nameInputTouched, setNameInputTouched] = useState(false);

  const nameIsValid = name.length !== 0;
  const nameInputIsValid = !nameIsValid && nameInputTouched;
  const isFormValid = false;

  isFormValid = nameIsValid ? true : false;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setNameInputTouched(true);
    if (!nameInputIsValid) {
      return;
    }
    console.log("name", name);
    setName("");
    setNameInputTouched(false);
  };

  const onNameChangeHandler = (e) => {
    const { value, name } = e.target;
    setName(value);
  };

  const onNameBlurHandler = (e) => {
    setNameInputTouched(true);
  };
  const formClass = nameInputIsValid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={formClass}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={onNameChangeHandler}
          onBlur={onNameBlurHandler}
          ref={nameInputRef}
          name="fname"
          value={name}
        />
        {nameInputIsValid && (
          <p className="error-text">Name must not be empty...!</p>
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
