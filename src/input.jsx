
export default function Input(props){
    return (
      <>
        <div className="form-control">
          <label htmlFor={props.for} id={props.labelId}>
            {props.label}
          </label>
          <section>
            <input type={props.type} id={props.nameId} placeholder={props.placeholder} />
          </section>
        </div>
      </>
    );
}