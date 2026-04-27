import Link from "next/link";

const contactCards = [
  {
    title: "Email",
    value: "mosharrafhossain@msunitedlc.com",
    detail: "Best for project inquiries, proposals, and partnership requests.",
  },
  {
    title: "Location",
    value: "1209 Mountain Road Pl NE Ste R, Albuquerque, NM 87110",
    detail: "Serving clients across regions through remote-first collaboration.",
  },
  {
    title: "Response window",
    value: "1 to 2 business days",
    detail: "We reply with next steps, timeline expectations, and scope guidance.",
  },
];

export default function Contact() {
  return (
    <main className="page">
      <section className="page-hero">
        <p className="eyebrow">Contact</p>
        <h1 className="page-title">Let us talk through your next initiative.</h1>

        <p className="page-intro">
          Share your goals, constraints, and expected timeline. We will suggest
          a practical path forward.
        </p>

        <div className="page-actions">
          <a href="mailto:mosharrafhossain@msunitedlc.com" className="button button--primary">
            Email{/*  mosharrafhossain@msunitedlc.com */}
          </a>
          <Link href="/services" className="button button--secondary">
            Review Services First
          </Link>
        </div>
      </section>

      <section className="section-grid" aria-label="Contact details">
        {contactCards.map((card) => (
          <article key={card.title} className="surface-card">
            <h2>{card.title}</h2>
            <p>{card.value}</p>
            <p>{card.detail}</p>
          </article>
        ))}
      </section>

      <section className="surface-card" aria-label="What to include in your message">
        <h2 className="section-title">What helps us respond faster</h2>
        <ul className="feature-list">
          <li>Brief context about your business or project stage</li>
          <li>The primary challenge you want to solve first</li>
          <li>Any timeline or delivery constraints</li>
        </ul>
      </section>
    </main>
  );
}