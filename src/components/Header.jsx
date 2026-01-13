import React from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Findings", to: "/findings" },
  { label: "Subscription", to: "/subscription" },
  { label: "Stakeholders", to: "/stakeholders" },
  { label: "Methodology", to: "/methodology" },
  { label: "History", to: "/history" },
  { label: "Partners", to: "/partners" },
  { label: "Get Involved", to: "/get-involved" },
];

export default function Header() {
  return (
    <header className="site-header">
      <nav className="nav">
        <Link className="brand" to="/">
          <span className="brand-mark">TSER</span>
          <div>
            <p className="brand-title">Tanzania Startup Ecosystem Status Report</p>
            <p className="brand-subtitle">2025/26 Evidence Platform</p>
          </div>
        </Link>
        <div className="nav-links">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </div>
        <Link className="nav-cta" to="/get-involved">
          Subscribe
        </Link>
      </nav>
    </header>
  );
}
