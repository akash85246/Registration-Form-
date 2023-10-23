/* eslint-disable react/prop-types */
export default function Input(props) {
  return (
    <>
      <div className="form-control">
        <label htmlFor={props.for} id={props.labelId}>
          {props.label}
        </label>
        <section>
          <input
            type={props.type}
            id={props.nameId}
            maxLength={props.Length}
            onChange={props.validateForm}
            required
          />
        </section>

        {props.value !== "" ? (
          <span id={props.spanId} className="textDanger">
            {props.span}
          </span>
        ) : null}
      </div>
    </>
  );
}
