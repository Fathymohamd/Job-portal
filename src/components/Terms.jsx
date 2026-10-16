import { Link } from "react-router-dom";


const Terms = () => {
  return (
    <section className="terms-page">
      <div className="terms-container">

        <div className="terms-header">
          <span>TERMS & CONDITIONS</span>

          <h1>Terms & Conditions</h1>

          <p>
            Please read these terms carefully before using our
            job portal platform.
          </p>
        </div>

        <div className="terms-content">

          <div className="terms-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using our platform, you agree to follow
              these Terms & Conditions. If you do not agree with these
              terms, please do not use the platform.
            </p>
          </div>

          <div className="terms-section">
            <h2>2. User Accounts</h2>
            <p>
              Users are responsible for providing accurate information
              when creating an account and for keeping their account
              credentials secure.
            </p>
          </div>

          <div className="terms-section">
            <h2>3. Job Listings</h2>
            <p>
              Companies are responsible for the accuracy and legitimacy
              of the jobs they publish on the platform.
            </p>
          </div>

          <div className="terms-section">
            <h2>4. Job Applications</h2>
            <p>
              Candidates are responsible for ensuring that the information
              provided in their profiles, CVs, and job applications is
              accurate and up to date.
            </p>
          </div>

          <div className="terms-section">
            <h2>5. Prohibited Activities</h2>
            <p>
              Users must not publish fake jobs, provide misleading
              information, impersonate others, or use the platform
              for illegal activities.
            </p>
          </div>

          <div className="terms-section">
            <h2>6. Account Suspension</h2>
            <p>
              We reserve the right to suspend or terminate accounts
              that violate these Terms & Conditions or misuse the platform.
            </p>
          </div>

          <div className="terms-section">
            <h2>7. Platform Responsibility</h2>
            <p>
              Our platform provides a place for candidates and companies
              to connect. We do not guarantee employment or the accuracy
              of every job listing.
            </p>
          </div>

          <div className="terms-section">
            <h2>8. Changes to These Terms</h2>
            <p>
              We may update these Terms & Conditions from time to time.
              Any changes will be published on this page.
            </p>
          </div>

          <div className="terms-section">
            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about these Terms & Conditions,
              please contact us through our platform.
            </p>
          </div>

        </div>

        <div className="terms-footer">
          <p>Last updated: August 2026</p>

          <Link to="/">
            ← Back to Home
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Terms;