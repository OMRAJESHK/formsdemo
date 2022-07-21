import React, { useState } from "react";

const BasicForm = (props) => {
  const [student, setSudent] = useState({});

  const checkInputValidation = (name, value) => {
    switch (name) {
      case "name":
        if (value.trim().length === 0) {
          alert("Please Enter Valid Name");
        }
        return value;

      default:
        break;
    }
  };
  const onStudentInputChangeHandler = (e) => {
    const { name, value } = e.target;
    checkInputValidation();
    setSudent((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("student", student);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            onChange={onStudentInputChangeHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lname"
            onChange={onStudentInputChangeHandler}
          />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={onStudentInputChangeHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
