import Link from "next/link";

const services = [
  {
    title: "Business Consulting",
    summary:
      "Strategic guidance for prioritization, service positioning, and growth planning.",
    points: [
      "Opportunity and risk mapping",
      "Operational process design",
      "Decision-ready recommendations",
    ],
  },
  {
    title: "Digital Services",
    summary:
      "Workflow modernization and digital enablement for teams that need better execution speed.",
    points: [
      "Digital process audits",
      "Automation opportunities",
      "Tooling alignment and rollout",
    ],
  },
  {
    title: "Software and Web Solutions",
    summary:
      "Implementation support for platforms, internal tools, and customer-facing web experiences.",
    points: [
      "Architecture and build planning",
      "Iterative product development",
      "Launch readiness and handover",
    ],
  },
];

const engagementFlow = [
  {
    label: "Start",
    title: "Scoping workshop",
    description: "Align goals, scope boundaries, and success metrics.",
  },
  {
    label: "Middle",
    title: "Execution cycles",
    description: "Deliver in small iterations with regular review checkpoints.",
  },
  {
    label: "Finish",
    title: "Handover and scale",
    description: "Transfer knowledge and define the next roadmap stage.",
  },
];

export default function Services() {
  return (
    <main className="page">
      <section className="page-hero">
        <p className="eyebrow">Services</p>
        <h1 className="page-title">
          Focused service tracks designed for measurable progress.
        </h1>
        <p className="page-intro">
          Choose a lane or combine multiple tracks. Every engagement is built
          around outcomes, not unnecessary process overhead.
        </p>

        <div className="page-actions">
          <Link href="/contact" className="button button--primary">
            Request a Consultation
          </Link>
          <Link href="/about" className="button button--secondary">
            Learn About Our Approach
          </Link>
        </div>
      </section>

      <section className="section-grid" aria-label="Service tracks">
        {services.map((service) => (
          <article key={service.title} className="surface-card">
            <h2>{service.title}</h2>
            <p>{service.summary}</p>
            <ul className="feature-list">
              {service.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="surface-card" aria-label="Engagement flow">
        <h2 className="section-title">Typical engagement sequence</h2>
        <p className="section-copy">
          A short, repeatable structure reduces decision load and keeps delivery
          momentum clear for all stakeholders.
        </p>
        <ol className="serial-list">
          {engagementFlow.map((step) => (
            <li key={step.title}>
              <p className="serial-label">{step.label}</p>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}