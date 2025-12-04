import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import GalleryPage from "./pages/GalleryPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages yang memakai layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Route>

        {/* Pages lain tanpa layout bisa ditaruh di sini */}
        {/* <Route path="/secret" element={<SecretPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
