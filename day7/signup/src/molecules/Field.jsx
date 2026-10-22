import Text from "../atoms/Text";
import Input from "../atoms/Input";

const Field = (props) => {
  return (
    <div className="form-field">
      <label className="field-label" htmlFor={props.id}>
        <Text text={props.title} size="small" weight="bold" color="normal" />
      </label>
      <Input
        id={props.id}
        type={props.type}
        value={props.value}
        func={props.func}
        invalid={props.cond}
        required={props.required}
      />
      {props.cond && (
        <span className="field-warning" role="alert">
          <Text text={props.warnTitle} size="small" weight="normal" color="warn" />
        </span>
      )}
    </div>
  );
};

export default Field;
