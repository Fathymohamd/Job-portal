import {
  MapPin,
  Clock3,
  Bookmark,
  ArrowUpRight,
} from "lucide-react";



const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechVision",
    location: "Cairo, Egypt",
    type: "Full Time",
    salary: "$1,500 - $2,500",
    logo: "TV",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "CodeLabs",
    location: "Alexandria, Egypt",
    type: "Remote",
    salary: "$1,800 - $3,000",
    logo: "CL",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "CreativeHub",
    location: "Giza, Egypt",
    type: "Full Time",
    salary: "$1,200 - $2,000",
    logo: "CH",
  },
  {
    id: 4,
    title: "React Developer",
    company: "WebFlow",
    location: "Remote",
    type: "Part Time",
    salary: "$1,000 - $1,800",
    logo: "WF",
  },
];

const FeaturedJobs = () => {
  return (
    <section className="featured-jobs">
      <div className="featured-container">

        <div className="featured-header">
          <div>
            <span className="section-label">
              Featured Opportunities
            </span>

            <h2>Featured Jobs</h2>

            <p>
              Discover some of the best opportunities from top companies.
            </p>
          </div>

          <button className="view-all-jobs">
            View All Jobs →
          </button>
        </div>

        <div className="jobs-grid">
          {jobs.map((job) => (
            <article className="job-card" key={job.id}>

              <div className="job-top">
                <div className="company-logo">
                  {job.logo}
                </div>

                <button className="save-job">
                  <Bookmark size={19} />
                </button>
              </div>

              <div className="job-content">
                <h3>{job.title}</h3>

                <p className="company-name">
                  {job.company}
                </p>

                <div className="job-info">
                  <span>
                    <MapPin size={15} />
                    {job.location}
                  </span>

                  <span>
                    <Clock3 size={15} />
                    {job.type}
                  </span>
                </div>

                <div className="job-bottom">
                  <strong>{job.salary}</strong>

                  <button>
                    <ArrowUpRight size={17} />
                  </button>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedJobs;