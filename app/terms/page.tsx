export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold text-gray-950">Terms and Conditions</h1>

      <p className="mt-4 text-sm text-gray-500">Last updated: April 25, 2026</p>

      <section className="mt-8 space-y-4">
        <p>
          Welcome to M&amp;S United LLC. By accessing or using our website, you
          agree to these Terms and Conditions.
        </p>

        <h2 className="text-xl font-semibold text-gray-950">Use of Website</h2>
        <p>
          This website is provided for general business information purposes. You
          agree not to misuse the website or use it for any unlawful activity.
        </p>

        <h2 className="text-xl font-semibold text-gray-950">Company Information</h2>
        <p>
          M&amp;S United LLC is a company based in New Mexico, United States. We
          provide business, digital, software, and web-related services.
        </p>

        <h2 className="text-xl font-semibold text-gray-950">No Warranty</h2>
        <p>
          The information on this website is provided as-is. We make reasonable
          efforts to keep information accurate, but we do not guarantee that all
          content will always be complete, current, or error-free.
        </p>

        <h2 className="text-xl font-semibold text-gray-950">Limitation of Liability</h2>
        <p>
          M&amp;S United LLC is not liable for any direct or indirect damages
          resulting from the use of this website.
        </p>

        <h2 className="text-xl font-semibold text-gray-950">Changes to These Terms</h2>
        <p>
          We may update these Terms and Conditions from time to time. Any changes
          will be posted on this page.
        </p>

        <h2 className="text-xl font-semibold text-gray-950">Contact Us</h2>
        <p>
          If you have any questions about these Terms and Conditions, please
          contact us at{" "}
          <a
            href="mailto:info@yourdomain.com"
            className="font-medium text-blue-600 underline"
          >
            info@yourdomain.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}