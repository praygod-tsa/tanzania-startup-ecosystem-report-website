import React from "react";

const stakeholderValue = [
  {
    name: "Government",
    value: "Policy design, regional planning, and regulatory impact tracking.",
  },
  {
    name: "Development Partners",
    value: "Program benchmarking, outcome evaluation, and donor coordination.",
  },
  {
    name: "Banks & DFIs",
    value: "Deal flow visibility, pipeline risk intelligence, and sector heatmaps.",
  },
  {
    name: "Corporates & Telcos",
    value: "Partnership sourcing, innovation procurement, and ecosystem scouting.",
  },
  {
    name: "Universities",
    value: "Talent pipeline analysis, commercialization insights, and research access.",
  },
  {
    name: "EISOs",
    value: "Benchmarking against national metrics and program improvement signals.",
  },
  {
    name: "Investors",
    value: "Market sizing, founder demographics, and investment trend analysis.",
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

export default function Stakeholders() {
  return (
    <section className="section alt" id="stakeholders">
      <SectionHeading
        kicker="Stakeholder Value"
        title="One evidence platform, tailored value for every stakeholder."
        subtitle="Clear pathways to use the data for policy, investment, and ecosystem building."
      />
      <div className="stakeholder-grid">
        {stakeholderValue.map((stakeholder) => (
          <div key={stakeholder.name} className="stakeholder-card">
            <h3>{stakeholder.name}</h3>
            <p>{stakeholder.value}</p>
            <button className="secondary">Explore Use Cases</button>
          </div>
        ))}
      </div>
    </section>
  );
}
