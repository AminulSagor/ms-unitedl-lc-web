import Link from "next/link";

const capabilityCards = [
  {
    title: "Business Strategy",
    description:
      "Decision support for market positioning, service design, and growth planning.",
  },
  {
    title: "Digital Services",
    description:
      "Modern operational workflows and digital systems that reduce friction and manual work.",
  },
  {
    title: "Software and Web Delivery",
    description:
      "Reliable implementation from concept through launch, tuned for maintainability and scale.",
  },
];

const deliveryPhases = [
  {
    label: "First impression",
    title: "Discovery and alignment",
    description:
      "Define scope, priorities, and measurable outcomes before execution starts.",
  },
  {
    label: "Core momentum",
    title: "Iterative build and feedback",
    description:
      "Ship in focused increments so stakeholders can evaluate direction early.",
  },
  {
    label: "Lasting memory",
    title: "Launch, handover, and optimization",
    description:
      "Deliver documentation, continuity plans, and next-step recommendations.",
  },
];

export default function Home() {
  return (
    <main className="page">
      <section className="page-hero">
        <p className="eyebrow">New Mexico based, globally aligned</p>
        <h1 className="page-title">
          Business and digital solutions with a clear path from idea to execution.
        </h1>
        <p className="page-intro">
          M&S United LLC supports teams that need dependable consulting and
          implementation without unnecessary complexity.
        </p>

        <div className="page-actions">
          <Link href="/services" className="button button--primary">
            Explore Services
          </Link>
          <Link href="/contact" className="button button--secondary">
            Start a Conversation
          </Link>
        </div>
      </section>

      <section className="section-grid" aria-label="Core capabilities">
        {capabilityCards.map((card) => (
          <article key={card.title} className="surface-card">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </article>
        ))}
      </section>

      <section className="surface-card" aria-label="Delivery flow">
        <h2 className="section-title">Simple delivery flow for better decisions</h2>
        <p className="section-copy">
          Each engagement uses a short three-step structure so progress stays easy
          to evaluate as your needs evolve.
        </p>
        <ol className="serial-list">
          {deliveryPhases.map((phase) => (
            <li key={phase.title}>
              <p className="serial-label">{phase.label}</p>
              <h3>{phase.title}</h3>
              <p>{phase.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section-grid" aria-label="Company details">
        <article className="surface-card">
          <h3>Headquarters</h3>
          <p>New Mexico, United States</p>
        </article>

        <article className="surface-card">
          <h3>Primary contact</h3>
          <p>info@yourdomain.com</p>
        </article>

        <article className="surface-card">
          <h3>Coverage</h3>
          <p>Business, digital, software, and web initiatives.</p>
        </article>
      </section>
    </main>
  );
}