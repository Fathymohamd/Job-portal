import { Link } from "react-router-dom";

import {
  Search,
  Building2,
  FileCheck2,
  Users,
  Target,
  ShieldCheck,
  Zap,
  BriefcaseBusiness,
  ArrowRight,
} from "lucide-react";



const About = () => {
  return (
    <main className="about-page">

      {/* =========================
          Hero
      ========================= */}

      <section className="about-hero">

        <div className="about-hero-content">

          <span className="about-label">
            ABOUT JOBHUB
          </span>

          <h1>
            Connecting talented people
            <br />
            with great <strong>opportunities.</strong>
          </h1>

          <p>
            JobHub is a modern job platform that helps
            talented professionals find their dream jobs
            and companies discover the right people.
          </p>

          <div className="about-hero-buttons">

            <Link
              to="/jobs"
              className="about-primary-btn"
            >
              Find Jobs
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/register"
              className="about-secondary-btn"
            >
              Create Account
            </Link>

          </div>

        </div>

      </section>


      {/* =========================
          Who We Are
      ========================= */}

      <section className="about-section">

        <div className="about-two-columns">

          <div className="about-text">

            <span className="section-label">
              WHO WE ARE
            </span>

            <h2>
              Making the job search
              <br />
              easier for everyone.
            </h2>

            <p>
              JobHub is a platform designed to connect
              job seekers with companies in a simple,
              fast, and effective way.
            </p>

            <p>
              Whether you're looking for your first job,
              taking the next step in your career, or
              searching for talented professionals,
              JobHub helps you find the right opportunity.
            </p>

          </div>

          <div className="about-visual">

            <div className="visual-icon">
              <BriefcaseBusiness size={42} />
            </div>

            <h3>
              Your career.
              <br />
              Your opportunity.
            </h3>

            <p>
              One platform connecting both sides
              of the hiring process.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          What We Do
      ========================= */}

      <section className="about-section about-services">

        <div className="section-heading">

          <span className="section-label">
            WHAT WE DO
          </span>

          <h2>
            Everything you need
            <br />
            to move forward.
          </h2>

          <p>
            We make finding jobs and hiring talent
            simple and efficient.
          </p>

        </div>

        <div className="services-grid">

          <article className="service-card">

            <div className="service-icon">
              <Search size={24} />
            </div>

            <h3>Find Jobs</h3>

            <p>
              Search thousands of job opportunities
              and find positions that match your skills.
            </p>

          </article>


          <article className="service-card">

            <div className="service-icon">
              <Building2 size={24} />
            </div>

            <h3>Discover Companies</h3>

            <p>
              Explore companies, learn about their
              culture, and discover new opportunities.
            </p>

          </article>


          <article className="service-card">

            <div className="service-icon">
              <FileCheck2 size={24} />
            </div>

            <h3>Apply Easily</h3>

            <p>
              Apply for jobs quickly and keep track
              of your applications in one place.
            </p>

          </article>


          <article className="service-card">

            <div className="service-icon">
              <Users size={24} />
            </div>

            <h3>Hire Great Talent</h3>

            <p>
              Companies can discover qualified
              candidates and build their teams.
            </p>

          </article>

        </div>

      </section>


      {/* =========================
          Mission
      ========================= */}

      <section className="mission-section">

        <div className="mission-container">

          <div className="mission-icon">
            <Target size={30} />
          </div>

          <span>OUR MISSION</span>

          <h2>
            Making opportunities accessible
            <br />
            to everyone.
          </h2>

          <p>
            Our mission is to create a simple and
            transparent platform where talented people
            can discover opportunities and companies
            can find the talent they need.
          </p>

        </div>

      </section>


      {/* =========================
          Why Choose Us
      ========================= */}

      <section className="about-section">

        <div className="why-grid">

          <div className="why-content">

            <span className="section-label">
              WHY JOBHUB
            </span>

            <h2>
              Built for people
              <br />
              who want to grow.
            </h2>

            <p>
              We focus on making the hiring process
              easier for both candidates and employers.
            </p>

          </div>


          <div className="why-list">

            <div className="why-item">

              <div className="why-icon">
                <ShieldCheck size={21} />
              </div>

              <div>
                <h3>Trusted Opportunities</h3>

                <p>
                  Connect with companies and
                  opportunities you can trust.
                </p>
              </div>

            </div>


            <div className="why-item">

              <div className="why-icon">
                <Zap size={21} />
              </div>

              <div>
                <h3>Simple & Fast</h3>

                <p>
                  Find jobs and apply without
                  unnecessary complexity.
                </p>
              </div>

            </div>


            <div className="why-item">

              <div className="why-icon">
                <Users size={21} />
              </div>

              <div>
                <h3>Growing Community</h3>

                <p>
                  Join a growing community of
                  professionals and companies.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          Statistics
      ========================= */}

      <section className="stats-section">

        <div className="stats-container">

          <div className="stat-item">
            <strong>10K+</strong>
            <span>Jobs</span>
          </div>

          <div className="stat-item">
            <strong>2.5K+</strong>
            <span>Companies</span>
          </div>

          <div className="stat-item">
            <strong>50K+</strong>
            <span>Job Seekers</span>
          </div>

          <div className="stat-item">
            <strong>15K+</strong>
            <span>Successful Hires</span>
          </div>

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}

      <section className="about-cta">

        <div>

          <span>
            START YOUR JOURNEY
          </span>

          <h2>
            Ready to find your
            next opportunity?
          </h2>

          <p>
            Explore jobs and take the next step
            in your career today.
          </p>

          <Link
            to="/jobs"
            className="cta-button"
          >
            Find Your Next Job
            <ArrowRight size={17} />
          </Link>

        </div>

      </section>

    </main>
  );
};

export default About;