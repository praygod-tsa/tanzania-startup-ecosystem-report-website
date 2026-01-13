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

export default function GetInvolved() {
  return (
    <section className="section alt" id="get-involved">
      <SectionHeading
        kicker="Get Involved"
        title="Subscribe, collaborate, and strengthen Tanzania's evidence system."
        subtitle="Access the report, explore data services, or request a tailored briefing."
      />
      <div className="get-involved">
        <div className="card">
          <h3>Subscription pathways</h3>
          <p>
            Join the evidence platform through one of the subscription tiers. Each subscription reinforces the
            sustainability of national data infrastructure and ensures ongoing transparency.
          </p>
          <ul>
            <li>Receive annual and quarterly reporting packages.</li>
            <li>Participate in governance and thematic research modules.</li>
            <li>Access a growing suite of dashboards and data products.</li>
          </ul>
          <div className="hero-actions">
            <button className="primary">Request Subscription</button>
            <button className="ghost">Download Media Kit</button>
          </div>
        </div>
        <form className="contact-form">
          <h3>Contact the Secretariat</h3>
          <label>
            Organization
            <input type="text" placeholder="Institution name" />
          </label>
          <label>
            Contact Person
            <input type="text" placeholder="Name" />
          </label>
          <label>
            Email Address
            <input type="email" placeholder="email@organization.org" />
          </label>
          <label>
            Interest Area
            <select>
              <option>Subscription inquiry</option>
              <option>Policy briefing</option>
              <option>Data partnership</option>
              <option>Media request</option>
            </select>
          </label>
          <label>
            Message
            <textarea rows="4" placeholder="Tell us about your needs." />
          </label>
          <button type="submit" className="secondary">
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}
