import React from 'react';

const stats = [
  { label: 'Startups mapped (2024)', value: '1,240+' },
  { label: 'Jobs supported', value: '19,500+' },
  { label: 'Capital mobilized', value: '$310M' },
  { label: 'Active EISOs', value: '110+' },
];

const findings = [
  {
    title: 'Startup growth 2021–2024',
    description:
      'Consistent year-on-year growth, with a strong rise in agritech, fintech, and climate resilience ventures.',
    metric: '+28% CAGR',
  },
  {
    title: 'Jobs created',
    description:
      'Formal and informal jobs across Dar es Salaam, Arusha, Mwanza, and emerging regional hubs.',
    metric: '6,300 net new jobs',
  },
  {
    title: 'Investment flows',
    description:
      'Early-stage equity and blended finance increasing, with more local participation.',
    metric: '$92M in 2024',
  },
  {
    title: 'Founder demographics',
    description:
      'Rising women-led teams and youth founders supported by targeted accelerators.',
    metric: '32% women-led',
  },
];

const subscriptionTiers = [
  {
    tier: 'Core Access',
    price: 'Entry level',
    focus: 'Baseline evidence access and annual report bundle.',
    highlights: ['Annual report', 'Executive brief', 'Policy-ready insights'],
  },
  {
    tier: 'Applied Evidence',
    price: 'Programmatic',
    focus: 'Operational data insights and benchmarking support.',
    highlights: ['Custom briefings', 'Regional profiles', 'Stakeholder workshops'],
  },
  {
    tier: 'Thematic Lead',
    price: 'Strategic',
    focus: 'Deep dives on priority themes and sector dashboards.',
    highlights: ['Thematic datasets', 'Scenario modeling', 'Priority sector focus'],
  },
  {
    tier: 'System Underwriter',
    price: 'Foundational',
    focus: 'Sustained national data infrastructure partnership.',
    highlights: ['Governance seat', 'Multi-year access', 'Evidence system co-design'],
  },
];

const stakeholderValue = [
  {
    title: 'Government & Policymakers',
    copy: 'Policy-ready diagnostics, regional benchmarks, and evidence for regulatory reform.',
  },
  {
    title: 'Development Partners & Donors',
    copy: 'Program design inputs, impact tracking, and longitudinal ecosystem indicators.',
  },
  {
    title: 'Investors & Financial Institutions',
    copy: 'Pipeline visibility, risk signals, and sector opportunity mapping.',
  },
  {
    title: 'Corporates & Telcos',
    copy: 'Partnership matchmaking and market intelligence for innovation scouting.',
  },
  {
    title: 'Universities & Research Institutions',
    copy: 'Talent flow data, commercialization insights, and research collaboration paths.',
  },
  {
    title: 'Ecosystem Support Organizations (EISOs)',
    copy: 'Benchmarking tools, program improvement insights, and collaboration pathways.',
  },
  {
    title: 'Media & General Public',
    copy: 'Authoritative, accessible data stories on the national innovation agenda.',
  },
];

const timeline = [
  {
    year: '2021',
    title: 'Baseline mapping',
    description: 'First national census of startups and support actors.',
  },
  {
    year: '2022',
    title: 'Methodology formalized',
    description: 'Peer-reviewed indicators and quality assurance protocols launched.',
  },
  {
    year: '2023',
    title: 'Regional expansion',
    description: 'Expanded coverage beyond major hubs with field partners.',
  },
  {
    year: '2024',
    title: 'Evidence system scaling',
    description: 'Integration of investment, jobs, and sector dashboards.',
  },
  {
    year: '2025/26',
    title: 'Subscription model launched',
    description: 'Sustainable partner-supported evidence infrastructure.',
  },
];

const partners = [
  'Government agencies',
  'Development partners',
  'Universities & research labs',
  'Investors & DFIs',
  'Corporate innovation teams',
  'Ecosystem support organizations',
];

const barData = [
  { label: '2021', value: 45 },
  { label: '2022', value: 62 },
  { label: '2023', value: 78 },
  { label: '2024', value: 92 },
];

export default function App() {
  return (
    <div className="page">
      <header className="hero" id="home">
        <nav className="nav">
          <div className="brand">Startup Ecosystem Status Report</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#findings">Key Findings</a>
            <a href="#subscription">Subscription</a>
            <a href="#stakeholders">Stakeholders</a>
            <a href="#methodology">Methodology</a>
            <a href="#history">History</a>
            <a href="#partners">Partners</a>
            <a href="#get-involved">Get Involved</a>
          </div>
        </nav>

        <div className="hero-content">
          <div>
            <p className="eyebrow">Tanzania Startup Ecosystem Status Report 2025/26</p>
            <h1>
              A national evidence platform for entrepreneurship, innovation, and inclusive
              growth.
            </h1>
            <p className="lead">
              The annual status report is Tanzania’s authoritative reference on the startup
              ecosystem — trusted by policymakers, investors, development partners, and the
              public since 2021.
            </p>
            <div className="cta-group">
              <button className="primary">Download Report</button>
              <button className="ghost">Subscribe</button>
              <button className="ghost">View Dashboards</button>
            </div>
          </div>
          <div className="hero-card">
            <h3>2025/26 Headline Indicators</h3>
            <div className="stats-grid">
              {stats.map((stat) => (
                <div key={stat.label} className="stat">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="trust-badges">
              <span>Continuity since 2021</span>
              <span>Peer-reviewed methods</span>
              <span>Neutral public good</span>
            </div>
          </div>
        </div>
      </header>

      <section className="section" id="about">
        <div className="section-header">
          <h2>About the Report</h2>
          <p>
            The Tanzania Startup Ecosystem Status Report is a long-running national evidence
            system, co-created by a multi-stakeholder coalition. It balances rigorous data
            collection with public accountability and multi-year continuity.
          </p>
        </div>
        <div className="grid-3">
          <div className="info-card">
            <h3>What it is</h3>
            <p>
              A comprehensive annual assessment of startup activity, investment, jobs, and
              ecosystem enablers across Tanzania.
            </p>
          </div>
          <div className="info-card">
            <h3>Why it is credible</h3>
            <p>
              Built on peer-reviewed methodology, transparent QA, and governance since 2021
              with repeatable indicators.
            </p>
          </div>
          <div className="info-card">
            <h3>Who is involved</h3>
            <p>
              Government, development partners, universities, investors, corporates, and
              ecosystem builders co-create the evidence system.
            </p>
          </div>
        </div>
      </section>

      <section className="section muted" id="findings">
        <div className="section-header">
          <h2>Key Findings</h2>
          <p>
            A snapshot of growth, jobs, investment, and inclusion trends across the ecosystem.
          </p>
        </div>
        <div className="findings-grid">
          {findings.map((item) => (
            <div key={item.title} className="info-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="metric">{item.metric}</span>
            </div>
          ))}
        </div>
        <div className="chart-card">
          <div>
            <h3>Startup growth index</h3>
            <p>Indicative growth in the number of mapped startups (2021–2024).</p>
          </div>
          <div className="bar-chart" role="img" aria-label="Bar chart showing growth from 2021 to 2024">
            {barData.map((bar) => (
              <div key={bar.label} className="bar-group">
                <div className="bar" style={{ height: `${bar.value}%` }}></div>
                <span>{bar.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="subscription">
        <div className="section-header">
          <h2>Subscription Model</h2>
          <p>
            Partners subscribe to sustain the evidence system. All tiers are non-exclusive and
            reinforce national ownership of the data.
          </p>
        </div>
        <div className="tier-grid">
          {subscriptionTiers.map((tier) => (
            <div key={tier.tier} className="tier-card">
              <h3>{tier.tier}</h3>
              <p className="tier-price">{tier.price}</p>
              <p className="tier-focus">{tier.focus}</p>
              <ul>
                {tier.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="table-card">
          <h3>Tier comparison</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Benefits</th>
                  <th>Core Access</th>
                  <th>Applied Evidence</th>
                  <th>Thematic Lead</th>
                  <th>System Underwriter</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Annual report & executive brief</td>
                  <td>✓</td>
                  <td>✓</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Regional benchmarking dashboards</td>
                  <td>—</td>
                  <td>✓</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Thematic deep dives</td>
                  <td>—</td>
                  <td>—</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Governance participation</td>
                  <td>—</td>
                  <td>—</td>
                  <td>—</td>
                  <td>✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section muted" id="stakeholders">
        <div className="section-header">
          <h2>Stakeholder Value</h2>
          <p>Different partners use the same evidence in distinct, complementary ways.</p>
        </div>
        <div className="grid-3">
          {stakeholderValue.map((stakeholder) => (
            <div key={stakeholder.title} className="info-card">
              <h3>{stakeholder.title}</h3>
              <p>{stakeholder.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="methodology">
        <div className="section-header">
          <h2>Methodology & Data Integrity</h2>
          <p>
            The report is built on transparent, ethical, and repeatable research methods.
          </p>
        </div>
        <div className="grid-3">
          <div className="info-card">
            <h3>Sampling approach</h3>
            <p>
              A nationally representative sampling frame with regional validation partners
              ensures coverage beyond major hubs.
            </p>
          </div>
          <div className="info-card">
            <h3>Transparency & QA</h3>
            <p>
              Data is peer-reviewed, triangulated with partner sources, and audited for
              consistency year-on-year.
            </p>
          </div>
          <div className="info-card">
            <h3>Data ethics & privacy</h3>
            <p>
              Robust consent practices, anonymization protocols, and Data Use Agreements
              protect founders and organizations.
            </p>
          </div>
        </div>
      </section>

      <section className="section muted" id="history">
        <div className="section-header">
          <h2>History & Impact</h2>
          <p>
            From baseline mapping to a sustained evidence system with multi-stakeholder
            governance.
          </p>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <div key={item.year} className="timeline-item">
              <div className="timeline-year">{item.year}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="partners">
        <div className="section-header">
          <h2>Partners & Collaborators</h2>
          <p>
            The evidence system is inclusive and non-exclusive. It brings together national and
            international actors committed to Tanzania’s innovation economy.
          </p>
        </div>
        <div className="pill-grid">
          {partners.map((partner) => (
            <span key={partner} className="pill">
              {partner}
            </span>
          ))}
        </div>
      </section>

      <section className="section muted" id="get-involved">
        <div className="section-header">
          <h2>Get Involved / Subscribe</h2>
          <p>
            Join the national evidence platform. Subscribe for access, co-create insights, and
            help sustain the system.
          </p>
        </div>
        <div className="contact-grid">
          <div className="info-card">
            <h3>How to subscribe</h3>
            <p>
              Review the tier that fits your organization, schedule a briefing, and sign a
              Data Use Agreement to access the evidence portal.
            </p>
            <ul>
              <li>Annual report & executive summary</li>
              <li>Media kit and public data extracts</li>
              <li>Co-creation workshops</li>
            </ul>
          </div>
          <form className="contact-form">
            <label>
              Organization name
              <input type="text" placeholder="e.g. Ministry of ICT" />
            </label>
            <label>
              Contact email
              <input type="email" placeholder="name@organization.org" />
            </label>
            <label>
              What are you interested in?
              <select>
                <option>Subscription briefing</option>
                <option>Executive summary</option>
                <option>Partnership inquiry</option>
                <option>Media request</option>
              </select>
            </label>
            <label>
              Message
              <textarea rows="4" placeholder="Tell us about your data needs"></textarea>
            </label>
            <button type="submit" className="primary">
              Submit interest
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>Startup Ecosystem Status Report 2025/26</strong>
          <p>
            A neutral, national evidence platform co-created by Tanzania’s innovation
            stakeholders.
          </p>
        </div>
        <div className="footer-links">
          <span>Download summary</span>
          <span>Media kit</span>
          <span>Contact</span>
        </div>
      </footer>
    </div>
  );
}
