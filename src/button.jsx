import React from "react";

function SubmitButton({ label, onClick }) {
  return (
    <section className="butt">
      <button className="button" type="submit" onClick={onClick}>
        {label}
      </button>
    </section>
  );
}

export default SubmitButton;
