const Input = ({ id, type, value, func, invalid, required }) => {
  return (
    <input
      id={id}
      className="form-input"
      onChange={func}
      type={type}
      value={value}
      aria-invalid={invalid}
      required={required}
    />
  );
};

export default Input;
