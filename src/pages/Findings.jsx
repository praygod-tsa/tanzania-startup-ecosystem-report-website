import React from "react";

const growthTimeline = [
  { year: "2021", value: "placeholder" },
  { year: "2022", value: "placeholder" },
  { year: "2023", value: "placeholder" },
  { year: "2024", value: "placeholder" },
  { year: "2025/26", value: "placeholder" },
];

const demographics = [
  { label: "Female-founded startups (2024)", value: "16%" },
  { label: "Formally registered (2024)", value: "75.2%" },
  { label: "Youth founders", value: "placeholder" },
  { label: "Outside Dar es Salaam", value: "placeholder" },
];

const sectorHighlights = [
  {
    sector: "Fintech",
    insight: "placeholder",
  },
  {
    sector: "Agri & Climate",
    insight: "placeholder",
  },
  {
    sector: "Health",
    insight: "placeholder",
  },
  {
    sector: "Logistics",
    insight: "placeholder",
  },
];

function SectionHeading({ kicker, title, subtitle }) {
  return (
    <div className="section-heading">
      <p className="section-kicker">{kicker}</p>
      <h2>{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

export default function Findings() {
  return (
    <section className="section alt" id="findings">
      <SectionHeading
        kicker="Key Findings"
        title="A clearer view of growth, jobs, and investment momentum."
        subtitle="Sample insights from the 2025/26 cycle to guide policy and investment strategy."
      />
      <div className="grid-2">
        <div className="chart-card">
          <h3>Startup growth over time (2021–2025/26)</h3>
          <div className="placeholder-chart">
            {growthTimeline.map((item) => (
              <div key={item.year} className="placeholder-row">
                <span>{item.year}</span>
                <span className="placeholder-value">{item.value}</span>
              </div>
            ))}
          </div>
          <p className="note">Chart values are placeholders until the full dataset is published.</p>
        </div>
        <div className="chart-card">
          <h3>Founder demographics</h3>
          <div className="pill-grid">
            {demographics.map((item) => (
              <div key={item.label} className="pill">
                <p>{item.label}</p>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid-2">
        <div className="card">
          <h3>Jobs supported (2024)</h3>
          <p>
            Startups supported 138,453 jobs in 2024, reflecting the ecosystem&apos;s role in employment and productivity
            across regions and sectors.
          </p>
        </div>
        <div className="card">
          <h3>Investment flows (2024)</h3>
          <p>
            Foreign investment (FDI) totaled USD 53–56M, while domestic investment reached USD 43.4M, indicating
            growing local participation alongside global capital.
          </p>
        </div>
      </div>
      <div className="card">
        <h3>Sector highlights</h3>
        <div className="sector-grid">
          {sectorHighlights.map((item) => (
            <div key={item.sector} className="sector-card">
              <div>
                <h4>{item.sector}</h4>
                <p>{item.insight}</p>
              </div>
              <span className="sector-share">placeholder</span>
            </div>
          ))}
        </div>
        <p className="note">Sector shares are placeholders until confirmed in the published dataset.</p>
      </div>
    </section>
  );
}
