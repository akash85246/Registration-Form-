import React from "react";

export default function Gender() {
  return (
    <div className="form-control">
      <label>Gender</label>
      <div className="radio">
        <label htmlFor="male">Male</label>
        <input type="radio" id="male" name="gender" value="male" />
      </div>
      <div className="radio">
        <label htmlFor="female">Female</label>
        <input type="radio" id="female" name="gender" value="female" />
      </div>
    </div>
  );
}
