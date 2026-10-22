const Button = ({ isAble }) => {
  return (
    <button className="signup-button" type="submit" disabled={!isAble}>
      가입하기
    </button>
  );
};

export default Button;
