import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Story from "./pages/Story.jsx";
import App from "./App.jsx";
import Menu from "./pages/Menu.jsx";
import Store from "./pages/Store.jsx";
import "./index.css";
import Layout from "./pages/Layout.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/story" element={<Story />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/store" element={<Store />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
