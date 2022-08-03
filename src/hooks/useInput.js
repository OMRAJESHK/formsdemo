import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isInputTouched, setIsInputTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isInputTouched;

  const onChangeHandler = (event) => {
    const { value } = event.target;
    setEnteredValue(value);
  };
  const onInputBlurHandler = () => {
    setIsInputTouched(true);
  };
  const reset = () => {
    setEnteredValue("");
    setIsInputTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid ?? false,
    hasError,
    onChangeHandler,
    onInputBlurHandler,
    reset,
  };
};

export default useInput;
