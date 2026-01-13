import React from "react";

const partners = [
  "Ministry of ICT & Innovation",
  "Tanzania Private Sector Foundation",
  "Development Partner Consortium",
  "National Research Universities",
  "Regional Innovation Hubs",
  "Investor & DFI Network",
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

export default function Partners() {
  return (
    <section className="section" id="partners">
      <SectionHeading
        kicker="Partners & Collaborators"
        title="A broad, inclusive coalition that protects neutrality."
        subtitle="Partners collaborate without exclusivity or ownership of the narrative."
      />
      <div className="partner-grid">
        {partners.map((partner) => (
          <div key={partner} className="partner-card">
            <span>{partner}</span>
          </div>
        ))}
      </div>
      <p className="note">
        Partner listing is illustrative. The full partner registry is maintained in the official report appendix.
      </p>
    </section>
  );
}
