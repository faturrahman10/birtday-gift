import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import CountdownPage from "./pages/CountdownPage";
import Home from "./pages/Home";
import GalleryPage from "./pages/GalleryPage";

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <Routes>
        {/* TIDAK PAKAI MainLayout */}
        <Route path="/" element={<CountdownPage />} />

        {/* PAKAI MAINLAYOUT */}
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
