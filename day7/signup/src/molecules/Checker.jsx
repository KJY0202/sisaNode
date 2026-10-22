import Badge from "../atoms/Badge";
import Checkbox from "../atoms/Checkbox";

const Checker = ({ checked, func, isNecessary, text }) => {
  return (
    <label className="agreement-row">
      <Checkbox checked={checked} func={func} />
      <Badge isNecessary={isNecessary} />
      <span>{text}</span>
    </label>
  );
};

export default Checker;
