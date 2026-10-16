import { Link } from "react-router-dom";


const Footer = () => {

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Job<span>Hub</span>
          </Link>

          <p>
            Find your dream job and build your career
            with the best companies.
          </p>
        </div>

        {/* For Job Seekers */}

        <div className="footer-column">
          <h3>For Job Seekers</h3>

          <Link to="/jobs">Find Jobs</Link>
          <Link to="/companies">Companies</Link>
          <Link to="/login">My Applications</Link>
          <Link to="/login">Saved Jobs</Link>
        </div>

        {/* For Employers */}

        <div className="footer-column">
          <h3>For Employers</h3>

          <Link to="/post-job">Post a Job</Link>
          <Link to="/employer">Employer Dashboard</Link>
          <Link to="/employer/jobs">Manage Jobs</Link>
          <Link to="/employer/applicants">
            Find Candidates
          </Link>
        </div>

        {/* Company */}

        <div className="footer-column">
          <h3>Company</h3>

          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 JobHub. All rights reserved.
        </p>

   <div className="social-links">
  <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
    Facebook
  </a>

  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
    LinkedIn
  </a>

  <a href="https://x.com" target="_blank" rel="noreferrer">
    X
  </a>
</div>
      </div>

    </footer>
  );
};

export default Footer;