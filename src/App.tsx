import { AnimatePresence, motion } from "framer-motion";
import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { products, research } from "./data/content";

const HomePage = lazy(() => import("./pages/HomePage").then((module) => ({ default: module.HomePage })));
const DetailPage = lazy(() => import("./pages/DetailPage").then((module) => ({ default: module.DetailPage })));
const SectionIndexPage = lazy(() => import("./pages/SectionIndexPage").then((module) => ({ default: module.SectionIndexPage })));

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const frame = window.requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView());
      return () => window.cancelAnimationFrame(frame);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function AppRoutes() {
  const location = useLocation();
  return (
    <>
      <ScrollManager />
      <Suspense fallback={<div className="min-h-screen bg-black" aria-label="Loading" />}>
        <AnimatePresence mode="wait">
          <motion.div
            key={`${location.pathname}${location.search}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.28, 0.11, 0.32, 1] }}
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<Navigate to="/#about" replace />} />
              <Route path="/experience" element={<Navigate to="/#about" replace />} />
              <Route path="/research" element={<SectionIndexPage title="Research" intro="Experiments in safer, smaller, and more useful language models." items={research} basePath="/research" />} />
              <Route path="/products" element={<SectionIndexPage title="Products" intro="AI products shaped around human correction and everyday utility." items={products} basePath="/products" />} />
              <Route path="/research/:slug" element={<DetailPage section="research" />} />
              <Route path="/products/:slug" element={<DetailPage section="products" />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </Suspense>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
