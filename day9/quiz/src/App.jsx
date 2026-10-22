import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import MenuDetail from "./pages/MenuDetail";
import Event from "./pages/Event";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:id" element={<MenuDetail />} />
        <Route path="/event" element={<Event />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
