export default function Input(props) {
  const handleBlur = (e) => {
    if (props.onBlur) {
      props.onBlur(e.target.value);
    }
  };

  return (
    <>
      <div className="form-control">
        <label htmlFor={props.for} id={props.labelId}>
          {props.label}
        </label>
        <section>
          <input type={props.type} id={props.nameId} onBlur={handleBlur} />
        </section>
        <span id={props.spanId} className="textDanger">
          {props.span}
        </span>
      </div>
    </>
  );
}
