const Checkbox = ({ checked, func }) => {
  return (
    <input
      className="agreement-checkbox"
      type="checkbox"
      checked={checked}
      onChange={func}
    />
  );
};

export default Checkbox;
