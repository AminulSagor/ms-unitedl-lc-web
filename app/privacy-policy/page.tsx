export default function PrivacyPolicy() {
  return (
    <main className="page">
      <section className="page-hero">
        <p className="eyebrow">Policy</p>
        <h1 className="page-title">Privacy Policy</h1>
        <p className="page-intro">
          Last updated: April 25, 2026. This policy explains how M&S United LLC
          handles information shared through this website.
        </p>
      </section>

      <article className="legal-prose">
        <p>
          M&S United LLC respects your privacy and keeps data collection limited
          to what is necessary for communication and service delivery.
        </p>

        <h2>Information we may collect</h2>
        <ul>
          <li>Contact details you provide directly, such as email address</li>
          <li>Business context shared during inquiry conversations</li>
          <li>Basic technical usage data used for site reliability</li>
        </ul>

        <h2>How information is used</h2>
        <p>
          Information is used to respond to inquiries, deliver requested services,
          and improve communication quality. We do not sell your personal data.
        </p>

        <h2>Data sharing</h2>
        <p>
          We only share data with trusted service providers when required to run
          operations and only under appropriate confidentiality safeguards.
        </p>

        <h2>Your choices</h2>
        <p>
          You can request updates or deletion of personal information by reaching
          out via email.
        </p>

        <h2>Contact</h2>
        <p>
          For privacy-related questions, contact{" "}
          <a href="mailto:info@yourdomain.com" className="font-semibold underline">
            info@yourdomain.com
          </a>
          .
        </p>
      </article>
    </main>
  );
}