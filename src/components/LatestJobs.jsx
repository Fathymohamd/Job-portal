import { Link } from "react-router-dom";
import { MapPin, Wallet } from "lucide-react";
const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Solutions",
    location: "Cairo, Egypt",
    type: "Full Time",
    salary: "15K - 25K EGP",
    tags: ["React", "JavaScript", "CSS"],
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Digital Agency",
    location: "Remote",
    type: "Full Time",
    salary: "20K - 30K EGP",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Creative Studio",
    location: "Alexandria, Egypt",
    type: "Part Time",
    salary: "10K - 18K EGP",
    tags: ["Figma", "UI Design", "UX"],
  },
  {
    id: 4,
    title: "Full Stack Developer",
    company: "Software House",
    location: "Cairo, Egypt",
    type: "Full Time",
    salary: "25K - 40K EGP",
    tags: ["React", "Node.js", "MongoDB"],
  },
];

const LatestJobs = () => {
  return (
    <section className="latest-jobs">
      <div className="latest-jobs-container">

        <div className="section-header">
          <div>
            <span className="section-label">NEW OPPORTUNITIES</span>
            <h2>Latest Jobs</h2>
            <p>
              Explore the latest job opportunities from top companies.
            </p>
          </div>

          <Link to="/jobs" className="view-all">
            View All Jobs →
          </Link>
        </div>

        <div className="latest-jobs-grid">
          {jobs.map((job) => (
            <article className="latest-job-card" key={job.id}>

              <div className="job-card-top">
                <div className="company-logo">
                  {job.company.charAt(0)}
                </div>

                <span className="job-type">
                  {job.type}
                </span>
              </div>

              <div className="job-card-content">
                <h3>{job.title}</h3>

                <p className="company-name">
                  {job.company}
                </p>

              <div className="job-details">
  <span>
    <MapPin size={15} />
    {job.location}
  </span>

  <span>
    <Wallet size={15} />
    {job.salary}
  </span>
</div>

                <div className="job-tags">
                  {job.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <Link
                to={`/jobs/${job.id}`}
                className="job-details-btn"
              >
                View Details
              </Link>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestJobs;