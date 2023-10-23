/* eslint-disable no-useless-escape */
import Input from "./input";
import Heading from "./heading";
import UniversityBranchSelector from "./dropdown";
import Checkbox from "./checkbox";
import PasswordInput from "./password";
import SubmitButton from "./button";
import Gender from "./gender";
import moment from "moment";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [studentId, setStudentId] = useState("");
  const [rno, setRno] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
    console.log("Student ID:", studentId);
    console.log("Roll Number:", rno);
  };

  function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const mail = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const rno = document.getElementById("rno").value;
    const sid = document.getElementById("sid").value;

    const rnoCheck = /^[^0]\d{12}$/;
    const sidCheck = /^[^0]\d{7}$/;
    const mailCheck = /^[\w\.-]+@[\w\.-]+\.\w+/;
    const nameCheck = /^[A-Za-z. ]{3,30}( [A-Za-z. ]{3,30})*$/;
    const numberCheck = /^[789]\d{9}$/;

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("numberError").innerHTML = "";
    document.getElementById("sidError").innerHTML = "";
    document.getElementById("rnoError").innerHTML = "";

    if (!nameCheck.test(name) && name != "") {
      document.getElementById("nameError").innerHTML =
        "**Name cannot contain numbers and should be more than 2 characters";
    } else {
      setName(name);
    }
    if (!mailCheck.test(mail) && mail != "") {
      document.getElementById("emailError").innerHTML =
        "**Email should have '@' and '.'";
    } else {
      setEmail(mail);
    }
    if (!numberCheck.test(number) && number != "") {
      document.getElementById("numberError").innerHTML =
        "**Phone Number should start with 7/8/9 and should have 10 digits, no characters allowed";
    } else {
      setPhoneNumber(number);
    }
    if (!sidCheck.test(sid) && sid != "") {
      document.getElementById("sidError").innerHTML =
        "**Student ID cannot start with 0 and should not have more than 7 digits";
    } else {
      setStudentId(sid);
    }
    if (!rnoCheck.test(rno) && rno != "") {
      document.getElementById("rnoError").innerHTML =
        "**University Roll Number can have 13 digits, not starting with 0";
    } else {
      setRno(rno);
    }
  }


  return (
    <>
      <Heading />
      <form id="form" onSubmit={handleSubmit}>
        <Input
          for="name"
          labelId="label-name"
          label="Name"
          type="text"
          nameId="name"
          spanId="nameError"
          Length="30"
          span=""
          validateForm={validateForm}
        />
        <Input
          for="email"
          labelId="label-email"
          label="Email"
          type="email"
          nameId="email"
          placeholder="Enter your email"
          spanId="emailError"
          Length="40"
          validateForm={validateForm}
        />
        <Gender validateForm={validateForm} />
        <Input
          for="number"
          labelId="label-number"
          label="Phone Number"
          type="text"
          nameId="number"
          spanId="numberError"
          Length="10"
          validateForm={validateForm}
        />
        <UniversityBranchSelector />
        <Input
          for="sid"
          labelId="label-SId"
          label="Student ID"
          type="text"
          nameId="sid"
          placeholder="Enter your student id"
          spanId="sidError"
          Length="8"
          validateForm={validateForm}
        />
        <Input
          for="rno"
          labelId="label-rno"
          label="University Roll Number"
          type="text"
          nameId="rno"
          spanId="rnoError"
          Length="13"
          validateForm={validateForm}
        />
        <Checkbox />
        <PasswordInput />
        <SubmitButton label="Submit Form" />
      </form>
    </>
  );
}

export default App;
