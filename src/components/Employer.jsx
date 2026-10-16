import { Link } from "react-router-dom";

import {
  BriefcaseBusiness,
  Users,
  ClipboardList,
  Clock3,
  Plus,
  Eye,
} from "lucide-react";
const Employer = () => {
  return (
    <section className="employer-page">
      <div className="employer-container">

        {/* Header */}

        <div className="employer-header">
          <div>
            <span>EMPLOYER DASHBOARD</span>
            <h1>Welcome, Employer  <BriefcaseBusiness size={22} /></h1>
            <p>
              Manage your jobs and find the right candidates
              for your company.
            </p>
          </div>

          <Link to="/post-job" className="post-job-btn">
            + Post a Job
          </Link>
        </div>

        {/* Statistics */}

        <div className="employer-stats">

  <div className="stat-card">
  <div className="stat-icon">
    <BriefcaseBusiness size={22} />
  </div>

  <div>
    <h3>12</h3>
    <p>Posted Jobs</p>
  </div>
</div>

<div className="stat-card">
  <div className="stat-icon">
    <Users size={22} />
  </div>

  <div>
    <h3>86</h3>
    <p>Total Applicants</p>
  </div>
</div>

<div className="stat-card">
  <div className="stat-icon">
    <ClipboardList size={22} />
  </div>

  <div>
    <h3>7</h3>
    <p>Active Jobs</p>
  </div>
</div>

<div className="stat-card">
  <div className="stat-icon">
    <Clock3 size={22} />
  </div>

  <div>
    <h3>5</h3>
    <p>Pending Applications</p>
  </div>
</div>

        </div>

        {/* Recent Jobs */}

        <div className="employer-section">

          <div className="section-header">
            <div>
              <h2>Recent Jobs</h2>
              <p>Manage your recently posted jobs.</p>
            </div>

            <Link to="/my-jobs">
              View All
            </Link>
          </div>

          <div className="jobs-table">

            <div className="job-row job-row-header">
              <span>Job Title</span>
              <span>Applicants</span>
              <span>Status</span>
              <span>Action</span>
            </div>

            <div className="job-row">
              <span>Frontend Developer</span>
              <span>24 Applicants</span>
              <span className="status active">
                Active
              </span>

              <Link to="/jobs/1">
                View
              </Link>
            </div>

            <div className="job-row">
              <span>Backend Developer</span>
              <span>18 Applicants</span>
              <span className="status active">
                Active
              </span>

              <Link to="/jobs/2">
                View
              </Link>
            </div>

            <div className="job-row">
              <span>UI/UX Designer</span>
              <span>12 Applicants</span>
              <span className="status closed">
                Closed
              </span>

              <Link to="/jobs/3">
                View
              </Link>
            </div>

          </div>

        </div>

        {/* Quick Actions */}

        <div className="quick-actions">

          <h2>Quick Actions</h2>

          <div className="action-grid">

            <Link to="/post-job" className="action-card">
              <span>  <Plus size={18} /></span>
              <div>
                <h3>Post a Job</h3>
                <p>Create a new job opportunity.</p>
              </div>
            </Link>

            <Link to="/my-jobs" className="action-card">
              <span>  <Eye size={17} /></span>
              <div>
                <h3>My Jobs</h3>
                <p>Manage your posted jobs.</p>
              </div>
            </Link>

            <Link to="/applications" className="action-card">
              <span>  <Plus size={24} /></span>
              <div>
                <h3>Applicants</h3>
                <p>Review candidate applications.</p>
              </div>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Employer;