import Input from "./input";
import Heading from "./heading";
import UniversityBranchSelector from "./dropdown";
import Checkbox from "./checkbox";
import PasswordInput from "./password";
import SubmitButton from "./button";

function App() {
  return (
    <>
      <Heading />
      <form id="form">
        <Input
          for="name"
          labelId="label-name"
          label="Name"
          type="text"
          nameId="name"
          placeholder="Enter Full Name"
        ></Input>
        <Input
          for="email"
          labelId="label-email"
          label="Email"
          type="email"
          nameId="email"
          placeholder="Enter your email"
        ></Input>
        <Input
          for="age"
          labelId="label-age"
          label="Date of Birth"
          type="text"
          nameId="age"
          placeholder="Enter your age"
        ></Input>
        <Input
          for="number"
          labelId="label-number"
          label="Phone Number"
          type="number"
          nameId="number"
          placeholder="Enter your phone number"
        ></Input>
        <UniversityBranchSelector />

        <Input
          for="StudentId"
          labelId="label-SId"
          label="Sudent ID"
          type="number"
          nameId="number"
          placeholder="Enter your student id"
        ></Input>
        <Input
          for="rno"
          labelId="label-rno"
          label="University Roll Number"
          type="number"
          nameId="rno"
        ></Input>
        <Checkbox />
        <PasswordInput />
        <SubmitButton label="Submit Form" />
      </form>
    </>
  );
}

export default App;
