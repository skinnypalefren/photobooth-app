import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CameraPage from "./pages/CameraPage";
import PhotostripsPage from "./pages/PhotostripsPage";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/camera" element={<CameraPage />} />
        <Route path="/photostrips" element={<PhotostripsPage />} />
      </Routes>
    </div>
  );
}

export default App;
