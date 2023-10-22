import React from "react";

export default function UniversityBranchSelector() {
  const handleBranchChange = (event) => {
    const selectedBranch = event.target.value;
    console.log("Selected Branch: ", selectedBranch);
  };

  return (
    <section className="branch">
      <label htmlFor="branch">Select Branch</label>
      <select id="branch" required onChange={handleBranchChange}>
        <option value="">Select a branch</option>
        <option value="computer-science">Computer Science</option>
        <option value="electrical-engineering">Electrical Engineering</option>
        <option value="mechanical-engineering">Mechanical Engineering</option>
        <option value="civil-engineering">Civil Engineering</option>
        <option value="aiml">AIML</option>
      </select>
    </section>
  );
}
