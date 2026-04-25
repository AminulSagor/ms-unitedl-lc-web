import Link from "next/link";

const valueCards = [
  {
    title: "Reliability",
    description:
      "Consistent delivery milestones, transparent status updates, and clear accountability.",
  },
  {
    title: "Clarity",
    description:
      "Simple communication, direct recommendations, and practical next steps.",
  },
  {
    title: "Long-term Fit",
    description:
      "Solutions that remain maintainable as your organization and data needs expand.",
  },
];

const partnershipPrinciples = [
  "Define outcomes before selecting tools or implementation details.",
  "Keep progress visible through short feedback loops and iterative delivery.",
  "Document decisions so future teams can scale without rework.",
];

export default function About() {
  return (
    <main className="page">
      <section className="page-hero">
        <p className="eyebrow">About us</p>
        <h1 className="page-title">
          A practical partner for business and digital growth.
        </h1>

        <p className="page-intro">
          M&S United LLC is a United States company registered in New Mexico,
          supporting clients with business consulting and digital execution across
          multiple markets.
        </p>

        <div className="page-actions">
          <Link href="/services" className="button button--primary">
            View Service Tracks
          </Link>
          <Link href="/contact" className="button button--secondary">
            Contact Our Team
          </Link>
        </div>
      </section>

      <section className="section-grid" aria-label="Core values">
        {valueCards.map((value) => (
          <article key={value.title} className="surface-card">
            <h2>{value.title}</h2>
            <p>{value.description}</p>
          </article>
        ))}
      </section>

      <section className="surface-card" aria-label="Partnership principles">
        <h2 className="section-title">How we work with growing teams</h2>
        <p className="section-copy">
          Our delivery model is intentionally lightweight so stakeholders can
          decide faster and scale with confidence.
        </p>

        <ul className="feature-list">
          {partnershipPrinciples.map((principle) => (
            <li key={principle}>{principle}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}