import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="brand-title">Tanzania Startup Ecosystem Status Report</p>
        <p className="brand-subtitle">Neutral evidence platform • Established 2021</p>
      </div>
      <div className="footer-links">
        <Link to="/">Back to home</Link>
        <a href="mailto:secretariat@tanzaniastartups.report">secretariat@tanzaniastartups.report</a>
        <Link to="/get-involved">Subscribe</Link>
      </div>
    </footer>
  );
}
