import React, { useState } from "react";

const PasswordInput = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("Weak");
  const [passwordMatchError, setPasswordMatchError] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const handleUsernameChange = (e) => {
    const newUsername = e.target.value;
    if (
      newUsername.trim() === "" ||
      !/^[A-Za-z. ]{1,30}([A-Za-z1-9._]{1,30})*$/.test(newUsername)
    ) {
      setUsernameError("Invalid username");
    } else {
      setUsernameError("");
    }

    setUsername(newUsername);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    const hasLetter = /[A-Za-z]/.test(newPassword);
    const hasNumber = /\d/.test(newPassword);

    if (newPassword.length >= 8 && hasLetter && hasNumber) {
      setPasswordStrength("Strong");
    } else if (newPassword.length >= 6 && (hasLetter || hasNumber)) {
      setPasswordStrength("Moderate");
    } else {
      setPasswordStrength("Weak");
    }

    if (newPassword !== confirmPassword) {
      setPasswordMatchError("Passwords do not match");
    } else {
      setPasswordMatchError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    if (password !== newConfirmPassword) {
      setPasswordMatchError("Passwords do not match");
    } else {
      setPasswordMatchError("");
    }
  };

  return (
    <div>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        onChange={handleUsernameChange}
        required
      />
      <span className="userError">{usernameError}</span>
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        onChange={handlePasswordChange}
        required
      />
      <br />
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        onChange={handleConfirmPasswordChange}
        required
      />
      <span id="pass" className="textDanger">
        {passwordMatchError}
      </span>
      <div id="passwordStrength">Password Strength: {passwordStrength}</div>
    </div>
  );
};

export default PasswordInput;
