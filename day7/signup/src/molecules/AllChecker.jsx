import Checkbox from "../atoms/Checkbox";

const AllChecker = ({ func, isChecked }) => {
  return (
    <label className="agreement-row agreement-row-all">
      <Checkbox checked={isChecked} func={func} />
      <span>전체 동의</span>
    </label>
  );
};

export default AllChecker;
