import useDashboardStore from "../store/dashboardStore";

const FontSelector = () => {
  const font = useDashboardStore((state) => state.font);
  const changeFont = useDashboardStore((state) => state.changeFont);

  return (
    <select
      value={font}
      onChange={(e) => changeFont(e.target.value)}
      className="dashboard__font-selector"
    >
      <option value="1">작은 글씨</option>
      <option value="2">보통 글씨</option>
      <option value="3">큰 글씨</option>
    </select>
  );
};

export default FontSelector;
