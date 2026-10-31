import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { DetailPage } from "./pages/DetailPage";
import { HomePage } from "./pages/HomePage";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/research/:slug" element={<DetailPage section="research" />} />
        <Route path="/products/:slug" element={<DetailPage section="products" />} />
      </Routes>
    </BrowserRouter>
  );
}
