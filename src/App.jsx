import Input from "./input";
import Heading from "./heading";
import UniversityBranchSelector from "./dropdown";
import Checkbox from "./checkbox";
import PasswordInput from "./password";
import SubmitButton from "./button";
import Gender from "./gender";
import moment from "moment";
import { useState } from "react";

function validateForm(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  // var mail = document.getElementById("email").value;

  var number = document.getElementById("number").value;

  var rno = document.getElementById("rno").value;
  var sid = document.getElementById("sid").value;

  var rnoCheck = /^[^0]\d{12}$/;
  var sidCheck = /^[^0]\d{7}$/;

  var date = document.getElementById("date").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;
  var nameCheck = /^[A-Za-z. ]{3,30}( [A-Za-z. ]{3,30})*$/;

  var numberCheck = /^[789]{1}[0-9]{9}$/;

  if (nameCheck.test(name)) {
    document.getElementById("nameError").innerHTML = "";
  } else {
    document.getElementById("nameError").innerHTML = "**Name is invalid";
  }

  if (!numberCheck.test(number)) {
    document.getElementById("numberError").innerHTML =
      "**Phone Number is invalid";
  } else {
    document.getElementById("numberError").innerHTML = "";
  }

  if (sidCheck.test(sid)) {
    document.getElementById("sidError").innerHTML = "";
  } else {
    document.getElementById("sidError").innerHTML = "**Sudent ID is invalid";
  }

  if (rnoCheck.test(rno)) {
    document.getElementById("rnoError").innerHTML = "";
  } else {
    document.getElementById("rnoError").innerHTML =
      "**University Roll Number  is invalid";
    
  }

  var dobString = date + "/" + month + "/" + year;
  var dobMoment = moment(dobString, "DD/MM/YYYY", true);

  if (dobMoment.isValid()) {
    console.log("h1");
    document.getElementById("dobError").innerHTML = "";
  } else {
    console.log("h2");
    document.getElementById("dobError").innerHTML =
      "**Date of Birth is invalid";
    return false;
  }
}

function App() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (emailRegex.test(newEmail)) {
      document.getElementById("emailError").innerHTML = "";
    } else {
      document.getElementById("emailError").innerHTML =
        "**Invalid email address";
    }
  };
  return (
    <>
      <Heading />
      <form id="form " onSubmit={validateForm}>
        <Input
          for="name"
          labelId="label-name"
          label="Name"
          type="text"
          nameId="name"
          placeholder="Enter Full Name"
          spanId="nameError"
          span=""
        ></Input>
        <Input
          for="email"
          labelId="label-email"
          label="Email"
          type="email"
          nameId="email"
          placeholder="Enter your email"
          spanId="emailError"
          value={email}
          onChange={handleEmailChange}
        ></Input>
        <span id="emailError" className="textDanger"></span>
        <div>
          <label>Date of Birth</label>
          <input
            type="number"
            placeholder="DD"
            id="date"
            max="31"
            min="1"
          ></input>
          <span>/</span>

          <input
            type="number"
            placeholder="MM"
            id="month"
            max="12"
            min="1"
          ></input>
          <span>/</span>
          <input
            type="number"
            placeholder="YYYY"
            id="year"
            max="2022"
            min="1995"
          ></input>
        </div>

        <span id="dobError" className="textDanger"></span>
        <Gender />
        <Input
          for="number"
          labelId="label-number"
          label="Phone Number"
          type="number"
          nameId="number"
          placeholder="Enter your phone number"
          spanId="numberError"
        ></Input>
        <UniversityBranchSelector />

        <Input
          for="StudentId"
          labelId="label-SId"
          label="Sudent ID"
          type="number"
          nameId="sid"
          placeholder="Enter your student id"
          spanId="sidError"
        ></Input>
        <Input
          for="rno"
          labelId="label-rno"
          label="University Roll Number"
          type="number"
          nameId="rno"
          spanId="rnoError"
        ></Input>
        <Checkbox />
        <PasswordInput />
        <SubmitButton label="Submit Form" />
      </form>
    </>
  );
}

export default App;
