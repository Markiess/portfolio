import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { products, research } from "./data/content";
import { AboutPage } from "./pages/AboutPage";
import { DetailPage } from "./pages/DetailPage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { HomePage } from "./pages/HomePage";
import { SectionIndexPage } from "./pages/SectionIndexPage";

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
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route
          path="/research"
          element={<SectionIndexPage title="Research" items={research} basePath="/research" />}
        />
        <Route
          path="/products"
          element={<SectionIndexPage title="Products" items={products} basePath="/products" />}
        />
        <Route path="/research/:slug" element={<DetailPage section="research" />} />
        <Route path="/products/:slug" element={<DetailPage section="products" />} />
      </Routes>
    </BrowserRouter>
  );
}
