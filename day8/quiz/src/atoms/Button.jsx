import useDashboardStore from "../store/dashboardStore";

const Button = () => {
  const startLoading = useDashboardStore((state) => state.startLoading);
  return (
    <button
      onClick={() => {
        startLoading();
      }}
    ></button>
  );
};

export default Button;
