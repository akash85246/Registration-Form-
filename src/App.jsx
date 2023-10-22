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
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [universityBranch, setUniversityBranch] = useState("");
  const [studentId, setStudentId] = useState("");
  const [rno, setRno] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("DOB:", dob);
    console.log("Phone Number:", phoneNumber);
    console.log("University Branch:", universityBranch);
    console.log("Student ID:", studentId);
    console.log("Roll Number:", rno);
  };

  function validateForm(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var mail = document.getElementById("email").value;

    var number = document.getElementById("number").value;

    var rno = document.getElementById("rno").value;
    var sid = document.getElementById("sid").value;

    var rnoCheck = /^[^0]\d{12}$/;
    var sidCheck = /^[^0]\d{7}$/;
    var mailCheck = /^[\w\.-]+@[\w\.-]+\.\w+$/;

    var date = document.getElementById("date").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var nameCheck = /^[A-Za-z. ]{3,30}( [A-Za-z. ]{3,30})*$/;

    var numberCheck = /^[789]{1}[0-9]{9}$/;

    if (nameCheck.test(name)) {
      document.getElementById("nameError").innerHTML = " ";
      setName(name);
    } else {
      document.getElementById("nameError").innerHTML =
        "**Name cannot contain number";
    }

    if (!numberCheck.test(number)) {
      document.getElementById("numberError").innerHTML =
        "**Phone Number should start with 7/8/9 and should have 10 digit no character allowed";
    } else {
      document.getElementById("numberError").innerHTML = "";
      setPhoneNumber(number);
    }

    if (sidCheck.test(sid)) {
      document.getElementById("sidError").innerHTML = "";
      setStudentId(sid);
    } else {
      document.getElementById("sidError").innerHTML = "**Sudent ID is invalid";
    }

    if (rnoCheck.test(rno)) {
      document.getElementById("rnoError").innerHTML = "";
      setRno(rno);
    } else {
      document.getElementById("rnoError").innerHTML =
        "**University Roll Number  can have 13 digit number not starting with 0";
    }
    if (mailCheck.test(mail)) {
      document.getElementById("emailError").innerHTML = "";
      setEmail(mail);
    } else {
      document.getElementById("emailError").innerHTML =
        "**Mail  should have @ and .";
    }

    var dobString = date + "/" + month + "/" + year;
    var dobMoment = moment(dobString, "DD/MM/YYYY", true);

    if (dobMoment.isValid()) {
      console.log("h1");
      document.getElementById("dobError").innerHTML = "";
      setDob(date + month + year);
    } else {
      console.log("h2");
      document.getElementById("dobError").innerHTML =
        "**Date of Birth is invalid";
    }
  }

  return (
    <>
      <Heading />
      <form id="form " onSubmit={handleSubmit}>
        <Input
          for="name"
          labelId="label-name"
          label="Name"
          type="text"
          nameId="name"
          spanId="nameError"
          Length="20"
          span=""
          validateForm={validateForm}
        ></Input>
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
        ></Input>
        <div>
          <label>Date of Birth</label>
          <input
            type="number"
            placeholder="DD"
            id="date"
            max="31"
            min="1"
            onChange={validateForm}
          ></input>
          <span>/</span>
          <input
            type="number"
            placeholder="MM"
            id="month"
            max="12"
            min="1"
            onChange={validateForm}
          ></input>
          <span>/</span>
          <input
            type="number"
            placeholder="YYYY"
            id="year"
            max="2022"
            min="1995"
            onChange={validateForm}
          ></input>
        </div>

        <span id="dobError" className="textDanger"></span>
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
        ></Input>
        <UniversityBranchSelector />

        <Input
          for="StudentId"
          labelId="label-SId"
          label="Sudent ID"
          type="text"
          nameId="sid"
          placeholder="Enter your student id"
          spanId="sidError"
          Length="8"
          validateForm={validateForm}
        ></Input>
        <Input
          for="rno"
          labelId="label-rno"
          label="University Roll Number"
          type="text"
          nameId="rno"
          spanId="rnoError"
          Length="13"
          validateForm={validateForm}
        ></Input>
        <Checkbox />
        <PasswordInput />
        <SubmitButton label="Submit Form" />
      </form>
    </>
  );
}

export default App;
