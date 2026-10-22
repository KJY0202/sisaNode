import useDashboardStore from "../store/dashboardStore";

const ThemeToggle = () => {
  const isDark = useDashboardStore((state) => state.isDark);
  const toggleDark = useDashboardStore((state) => state.toggleDark);

  return (
    <button
      onClick={toggleDark}
      className="dashboard__theme-toggle"
    >
      {isDark ? "☀️ 라이트 모드" : "🌙 다크 모드"}
    </button>
  );
};

export default ThemeToggle;
