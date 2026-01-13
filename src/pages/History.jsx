import React from "react";

const timeline = [
  { year: "2021", milestone: "Baseline ecosystem mapping and first national report." },
  { year: "2022", milestone: "Expanded regional coverage and policy uptake." },
  { year: "2023", milestone: "Investment flow tracking and sector deep dives." },
  { year: "2024", milestone: "Continuous data pipeline and governance council formed." },
  { year: "2025/26", milestone: "National evidence system with subscription model launch." },
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

export default function History() {
  return (
    <section className="section alt" id="history">
      <SectionHeading
        kicker="History & Impact"
        title="Five years of continuous evidence and growing national adoption."
        subtitle="Tracking milestones from baseline mapping to a national evidence infrastructure."
      />
      <div className="timeline">
        {timeline.map((item) => (
          <div key={item.year} className="timeline-item">
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-content">
              <p>{item.milestone}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="impact-grid">
        <div>
          <h3>Impact metrics</h3>
          <ul>
            <li>Policy brief uptake — placeholder.</li>
            <li>Program benchmarking impact — placeholder.</li>
            <li>Ecosystem alignment outcomes — placeholder.</li>
          </ul>
        </div>
        <div className="impact-card">
          <h3>Why continuity matters</h3>
          <p>
            Consistent measurement enables policy reform tracking, investment pipeline analysis, and long-term
            ecosystem strategy development.
          </p>
        </div>
      </div>
    </section>
  );
}
