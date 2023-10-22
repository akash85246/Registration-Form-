import React, { useState } from "react";

export default function Gender() {
  const [selectedGender, setSelectedGender] = useState("");

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };
  console.log("Selected Gender: ", selectedGender);

  return (
    <div className="form-control">
      <label>Sex</label>
      <div className="sex" style={{ display: "flex", marginRight: "10px" }}>
        <div className="radio">
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            required
            onChange={handleGenderChange}
          />
        </div>
        <div className="radio">
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            onChange={handleGenderChange}
          />
        </div>
      </div>
    </div>
  );
}
