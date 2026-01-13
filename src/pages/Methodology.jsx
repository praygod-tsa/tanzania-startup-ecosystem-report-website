import React from "react";

const methodologySteps = [
  {
    title: "National sampling frame",
    detail: "Multi-source registry, regional listings, and validation across the country.",
  },
  {
    title: "Transparency & QA",
    detail: "Peer review, audit trails, and reproducible data pipelines.",
  },
  {
    title: "Ethics & privacy",
    detail: "Consent-driven data collection, anonymization, and secure storage.",
  },
  {
    title: "Data use agreements",
    detail: "Clear DUAs for partners, ensuring responsible and non-exclusive use.",
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

export default function Methodology() {
  return (
    <section className="section" id="methodology">
      <SectionHeading
        kicker="Methodology & Data Integrity"
        title="Transparent, ethical, and repeatable research practices."
        subtitle="Built for trust, continuity, and defensible policy decisions."
      />
      <div className="method-grid">
        {methodologySteps.map((step) => (
          <div key={step.title} className="method-card">
            <h3>{step.title}</h3>
            <p>{step.detail}</p>
          </div>
        ))}
      </div>
      <div className="card emphasis">
        <h3>Data governance commitments</h3>
        <ul>
          <li>Shared stewardship through a cross-sector governance council.</li>
          <li>Independent peer review and reproducible audit trails.</li>
          <li>Inclusive sampling across regions, gender, and founder profiles.</li>
          <li>DUAs ensure non-exclusive, ethical use of evidence.</li>
        </ul>
      </div>
    </section>
  );
}
