import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Findings from "./pages/Findings.jsx";
import Subscription from "./pages/Subscription.jsx";
import Stakeholders from "./pages/Stakeholders.jsx";
import Methodology from "./pages/Methodology.jsx";
import History from "./pages/History.jsx";
import Partners from "./pages/Partners.jsx";
import GetInvolved from "./pages/GetInvolved.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="findings" element={<Findings />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="stakeholders" element={<Stakeholders />} />
          <Route path="methodology" element={<Methodology />} />
          <Route path="history" element={<History />} />
          <Route path="partners" element={<Partners />} />
          <Route path="get-involved" element={<GetInvolved />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
