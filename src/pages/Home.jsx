import React from "react";
import { Link } from "react-router-dom";

const headlineStats = [
  { label: "Active startups (2024)", value: "1,041" },
  { label: "Jobs supported (2024)", value: "138,453" },
  { label: "Active EISOs (2024)", value: "95" },
  { label: "Foreign investment FDI (2024)", value: "USD 53–56M" },
  { label: "Domestic investment (2024)", value: "USD 43.4M" },
  { label: "Female-founded startups (2024)", value: "16%" },
  { label: "Formally registered (2024)", value: "75.2%" },
];

const dashboardPlaceholders = [
  "Investment flows index — placeholder",
  "Jobs growth signal — placeholder",
  "Regional density map — placeholder",
  "Inclusion indicator — placeholder",
];

function StatCard({ label, value }) {
  return (
    <div className="stat-card">
      <p className="stat-value">{value}</p>
      <p className="stat-label">{label}</p>
    </div>
  );
}

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="eyebrow">National evidence system • Annual report since 2021</p>
          <h1>
            Tanzania Startup Ecosystem Status Report 2025/26
            <span className="highlight"> — the trusted national reference.</span>
          </h1>
          <p className="lead">
            A public-good research platform convening government, partners, investors, and ecosystem leaders to
            deliver authoritative data on entrepreneurship, jobs, and innovation.
          </p>
          <div className="hero-actions">
            <a
              className="primary"
              href="/downloads/tanzania-startup-ecosystem-status-report-2025-26.pdf"
            >
              Download Report
            </a>
            <Link className="secondary" to="/get-involved">
              Subscribe
            </Link>
            <button className="ghost">View Dashboards</button>
          </div>
          <div className="stat-grid">
            {headlineStats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
        <div className="hero-panel">
          <div className="panel-card">
            <h3>2025/26 Evidence Highlights</h3>
            <ul>
              <li>National evidence platform convened as a neutral public good.</li>
              <li>Continuous data pipeline enabling year-on-year comparability.</li>
              <li>Subscription model sustains long-term research infrastructure.</li>
            </ul>
          </div>
          <div className="panel-card metrics">
            <h3>Headline Indices</h3>
            <ul className="placeholder-list">
              {dashboardPlaceholders.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="note">Placeholder indicators for preview. Full dashboards available to subscribers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
