// import './stylesheet/home.css';
import Main from "./pages/main";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Ourteam_page from "./pages/ourteam_page";
import Social_activities from "./pages/social_activities";
import Developer from "./pages/Developer";
import Sponser from "./pages/sponser";
import Gal from "./pages/gallary";
import React from "react";
import Sponsors from "./pages/Sponsors";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/ourteam" element={<Ourteam_page />} />
      <Route path="/social" element={<Social_activities />} />
      <Route path="/gallary" element={<Gal />} />
      <Route path="/sponsers" element={<Sponser />} />
      <Route path="/devs" element={<Developer />} />
      <Route path="/spons" element={<Sponsors />} />
    </Routes>
  );
}

export default App;
