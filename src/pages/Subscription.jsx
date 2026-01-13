import React from "react";

const subscriptionTiers = [
  {
    name: "Core Access",
    price: "Entry-level",
    summary: "Annual report, national dashboards, and briefing notes.",
    benefits: [
      "Full report + executive summary",
      "Quarterly ecosystem pulse",
      "Access to national statistics",
    ],
  },
  {
    name: "Applied Evidence",
    price: "Programmatic",
    summary: "Deeper analytics for design, evaluation, and benchmarking.",
    benefits: [
      "Segmented data cuts",
      "Custom briefing workshop",
      "Evaluation-ready indicators",
    ],
  },
  {
    name: "Thematic Lead",
    price: "Sector-focused",
    summary: "Lead a thematic deep dive and co-publish insights.",
    benefits: [
      "Thematic research module",
      "Co-authored findings",
      "Priority data requests",
    ],
  },
  {
    name: "System Underwriter",
    price: "Strategic",
    summary: "Anchor the national evidence system with sustained support.",
    benefits: [
      "Governance seat",
      "National convening rights",
      "Multi-year data access",
    ],
  },
];

const tierComparison = [
  {
    feature: "Annual report & dashboards",
    core: true,
    applied: true,
    thematic: true,
    underwriter: true,
  },
  {
    feature: "Segmented datasets",
    core: false,
    applied: true,
    thematic: true,
    underwriter: true,
  },
  {
    feature: "Thematic deep dive",
    core: false,
    applied: false,
    thematic: true,
    underwriter: true,
  },
  {
    feature: "Governance participation",
    core: false,
    applied: false,
    thematic: false,
    underwriter: true,
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

export default function Subscription() {
  return (
    <section className="section" id="subscription">
      <SectionHeading
        kicker="Subscription Model"
        title="Sustain the evidence system while accessing deeper insight."
        subtitle="All tiers are non-exclusive, designed to expand trust and shared ownership."
      />
      <div className="tier-grid">
        {subscriptionTiers.map((tier) => (
          <div key={tier.name} className="tier-card">
            <div className="tier-header">
              <h3>{tier.name}</h3>
              <span>{tier.price}</span>
            </div>
            <p>{tier.summary}</p>
            <ul>
              {tier.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
            <button className="ghost">Request Access</button>
          </div>
        ))}
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Benefit</th>
              <th>Core</th>
              <th>Applied</th>
              <th>Thematic</th>
              <th>Underwriter</th>
            </tr>
          </thead>
          <tbody>
            {tierComparison.map((row) => (
              <tr key={row.feature}>
                <td>{row.feature}</td>
                <td>{row.core ? "✓" : "—"}</td>
                <td>{row.applied ? "✓" : "—"}</td>
                <td>{row.thematic ? "✓" : "—"}</td>
                <td>{row.underwriter ? "✓" : "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
