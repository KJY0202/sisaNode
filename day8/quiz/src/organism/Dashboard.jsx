import { useEffect, useState } from "react";
import useDashboardStore from "../store/dashboardStore";
import ThemeToggle from "../molecules/ThemeToggle";
import FontSelector from "../molecules/FontSelector";
import "./Dashboard.css";

const Dashboard = () => {
  const isLoading = useDashboardStore((state) => state.isLoading);
  const startLoading = useDashboardStore((state) => state.startLoading);
  const stopLoading = useDashboardStore((state) => state.stopLoading);
  const items = useDashboardStore((state) => state.items);
  const setItems = useDashboardStore((state) => state.setItems);

  const isDark = useDashboardStore((state) => state.isDark);
  const font = useDashboardStore((state) => state.font);

  const [error, setError] = useState("");

  useEffect(() => {
    if (!isLoading) return;

    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("요청 실패");
        }

        return res.json();
      })
      .then((data) => {
        setItems(data.products);
        setError("");
      })
      .catch(() => {
        setError("상품을 불러오지 못했습니다.");
      })
      .finally(() => {
        stopLoading();
      });
  }, [isLoading, setItems, stopLoading]);

  const dashboardClassName = [
    "dashboard",
    isDark ? "dashboard--dark" : "dashboard--light",
    `dashboard--font-${font}`,
  ].join(" ");

  return (
    <main className={dashboardClassName}>
      <h1 className="dashboard__heading">상품 대시보드</h1>

      <div className="dashboard__controls">
        <ThemeToggle />
        <FontSelector />

        <button
          onClick={startLoading}
          disabled={isLoading}
          className="dashboard__load-button"
        >
          {isLoading ? "불러오는 중..." : "데이터 가져오기"}
        </button>
      </div>

      {isLoading && <div className="loader">Loading...</div>}

      {error && <p className="dashboard__error">{error}</p>}

      <div className="dashboard__grid">
        {items.map((item) => (
          <article key={item.id} className="dashboard__card">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="dashboard__image"
            />

            <h2 className="dashboard__product-title">{item.title}</h2>

            <p className="dashboard__product-detail">${item.price}</p>

            <p className="dashboard__product-detail">⭐ {item.rating}</p>
          </article>
        ))}
      </div>
    </main>
  );
};

export default Dashboard;
