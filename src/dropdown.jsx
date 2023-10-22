export default function UniversityBranchSelector() {
  return (
    <section className="branch">
      <label htmlFor="branch">Select Branch</label>
      <select id="branch" required>
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
