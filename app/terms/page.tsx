const termsSections = [
  {
    title: "Use of Website",
    content:
      "This website is provided for general business information purposes. You agree not to misuse the website or use it for unlawful activities.",
  },
  {
    title: "Company Information",
    content:
      "M&S United LLC is based in New Mexico, United States. We provide business, digital, software, and web-related services.",
  },
  {
    title: "No Warranty",
    content:
      "Information on this website is provided as-is. While we make reasonable efforts to keep details accurate and current, we do not guarantee completeness at all times.",
  },
  {
    title: "Limitation of Liability",
    content:
      "M&S United LLC is not liable for direct or indirect damages resulting from the use of this website.",
  },
  {
    title: "Changes to These Terms",
    content:
      "These Terms and Conditions may be updated periodically. Any changes will be posted on this page.",
  },
];

export default function TermsPage() {
  return (
    <main className="page">
      <section className="page-hero">
        <p className="eyebrow">Legal</p>
        <h1 className="page-title">Terms and Conditions</h1>
        <p className="page-intro">Last updated: April 25, 2026</p>
      </section>

      <article className="legal-prose">
        <p>
          Welcome to M&amp;S United LLC. By accessing or using this website, you
          agree to these Terms and Conditions.
        </p>

        {termsSections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </section>
        ))}

        <h2>Contact Us</h2>
        <p>
          If you have questions about these Terms and Conditions, contact us at{" "}
          <a href="mailto:info@yourdomain.com" className="font-semibold underline">
            info@yourdomain.com
          </a>
          .
        </p>
      </article>
    </main>
  );
}