import React from "react";

function SectionHeading({ kicker, title, subtitle }) {
  return (
    <div className="section-heading">
      <p className="section-kicker">{kicker}</p>
      <h2>{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

export default function About() {
  return (
    <section className="section" id="about">
      <SectionHeading
        kicker="About the Report"
        title="A neutral, credible, and continuous national evidence platform."
        subtitle="Co-created annually since 2021 with government, donors, universities, and ecosystem leaders."
      />
      <div className="two-column">
        <div>
          <h3>What it is</h3>
          <p>
            The Status Report is a public-facing annual synthesis of Tanzania&apos;s startup ecosystem, translating
            data into actionable insight for policy, investment, and innovation strategy.
          </p>
        </div>
        <div>
          <h3>Why it is credible</h3>
          <p>
            Governance is multi-stakeholder, methods are transparent and peer-reviewed, and data continuity enables
            trend analysis across years without sponsor influence.
          </p>
        </div>
        <div>
          <h3>Who is involved</h3>
          <p>
            Government agencies, development partners, investors, universities, and ecosystem support organizations
            collectively shape the evidence system through shared stewardship.
          </p>
        </div>
      </div>
    </section>
  );
}
