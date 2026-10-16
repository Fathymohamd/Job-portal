import { Link } from "react-router-dom";
import {
  BriefcaseBusiness,
  Plus,
  Eye,
  Pencil,
  Trash2,
  Users,
  MapPin,
} from "lucide-react";


const EmployerJobs = () => {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      location: "Cairo, Egypt",
      type: "Full Time",
      applicants: 24,
      status: "Active",
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "Backend Developer",
      location: "Alexandria, Egypt",
      type: "Full Time",
      applicants: 18,
      status: "Active",
      posted: "5 days ago",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      location: "Remote",
      type: "Remote",
      applicants: 12,
      status: "Closed",
      posted: "10 days ago",
    },
  ];

  return (
    <section className="employer-jobs-page">
      <div className="employer-jobs-container">

        {/* Header */}

        <div className="jobs-page-header">
          <div>
            <span>EMPLOYER</span>

            <h1>My Jobs</h1>

            <p>
              Manage and track the jobs you have posted.
            </p>
          </div>

          <Link to="/post-job" className="post-job-btn">
            <Plus size={18} />
            Post a Job
          </Link>
        </div>

        {/* Stats */}

        <div className="jobs-stats">

          <div className="jobs-stat">
            <div className="jobs-stat-icon">
              <BriefcaseBusiness size={21} />
            </div>

            <div>
              <h3>{jobs.length}</h3>
              <p>Total Jobs</p>
            </div>
          </div>

          <div className="jobs-stat">
            <div className="jobs-stat-icon">
              <BriefcaseBusiness size={21} />
            </div>

            <div>
              <h3>
                {jobs.filter((job) => job.status === "Active").length}
              </h3>
              <p>Active Jobs</p>
            </div>
          </div>

          <div className="jobs-stat">
            <div className="jobs-stat-icon">
              <Users size={21} />
            </div>

            <div>
              <h3>
                {jobs.reduce(
                  (total, job) => total + job.applicants,
                  0
                )}
              </h3>
              <p>Total Applicants</p>
            </div>
          </div>

        </div>

        {/* Jobs */}

        <div className="jobs-list">

          <div className="jobs-list-header">
            <h2>Posted Jobs</h2>

            <p>
              {jobs.length} jobs found
            </p>
          </div>

          {jobs.map((job) => (

            <div className="employer-job-card" key={job.id}>

              <div className="job-main">

                <div className="job-icon">
                  <BriefcaseBusiness size={23} />
                </div>

                <div className="job-info">

                  <h2>{job.title}</h2>

                  <div className="job-details">

                    <span>
                      <MapPin size={15} />
                      {job.location}
                    </span>

                    <span>
                      {job.type}
                    </span>

                    <span>
                      <Users size={15} />
                      {job.applicants} Applicants
                    </span>

                  </div>

                  <p className="posted-date">
                    Posted {job.posted}
                  </p>

                </div>

              </div>

              <div className="job-actions">

                <span
                  className={`job-status ${
                    job.status === "Active"
                      ? "active"
                      : "closed"
                  }`}
                >
                  {job.status}
                </span>

                <div className="action-buttons">

                  <Link
                    to={`/jobs/${job.id}`}
                    className="view-btn"
                    title="View Job"
                  >
                    <Eye size={17} />
                  </Link>

                  <Link
                    to={`/employer/jobs/edit/${job.id}`}
                    className="edit-btn"
                    title="Edit Job"
                  >
                    <Pencil size={17} />
                  </Link>

                  <button
                    className="delete-btn"
                    title="Delete Job"
                  >
                    <Trash2 size={17} />
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default EmployerJobs;