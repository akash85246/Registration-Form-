export default function Checkbox() {
  return (
    <div className="form-control check">
      <label>College Year</label>
      <div className="radio">
        <label htmlFor="year-1">1</label>
        <input type="radio" id="year-1" name="year" />
      </div>
      <div className="radio">
        <label htmlFor="year-2">2</label>
        <input type="radio" id="year-2" name="year" />
      </div>
      <div className="radio">
        <label htmlFor="year-3">3</label>
        <input type="radio" id="year-3" name="year" />
      </div>
      <div className="radio">
        <label htmlFor="year-4">4</label>
        <input type="radio" id="year-4" name="year" />
      </div>
    </div>
  );
}
