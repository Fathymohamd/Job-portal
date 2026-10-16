import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  MapPin,
  BriefcaseBusiness,
  Clock3,
  DollarSign,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";



const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Solutions",
    location: "Cairo, Egypt",
    type: "Full Time",
    salary: "15K - 25K EGP",
    experience: "Mid Level",
    category: "Development",
    tags: ["React", "JavaScript", "CSS"],
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Digital Agency",
    location: "Remote",
    type: "Full Time",
    salary: "20K - 30K EGP",
    experience: "Mid Level",
    category: "Development",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Creative Studio",
    location: "Alexandria, Egypt",
    type: "Part Time",
    salary: "10K - 18K EGP",
    experience: "Entry Level",
    category: "Design",
    tags: ["Figma", "UI Design", "UX"],
  },
  {
    id: 4,
    title: "Full Stack Developer",
    company: "Software House",
    location: "Cairo, Egypt",
    type: "Full Time",
    salary: "25K - 40K EGP",
    experience: "Senior Level",
    category: "Development",
    tags: ["React", "Node.js", "MongoDB"],
  },
];

const Jobs = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [category, setCategory] = useState("");

  const filteredJobs = jobs.filter((job) => {
    const searchMatch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());

    const locationMatch =
      job.location.toLowerCase().includes(location.toLowerCase());

    const typeMatch =
      jobType === "" || job.type === jobType;

    const categoryMatch =
      category === "" || job.category === category;

    return (
      searchMatch &&
      locationMatch &&
      typeMatch &&
      categoryMatch
    );
  });

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <main className="jobs-page">

      {/* Header */}

      <section className="jobs-hero">
        <div className="jobs-hero-content">

          <span>FIND YOUR NEXT OPPORTUNITY</span>

          <h1>
            Find your
            <strong> dream job</strong>
          </h1>

          <p>
            Search thousands of jobs from top companies
            and find the opportunity that's right for you.
          </p>

          {/* Search */}

          <form
            className="jobs-search"
            onSubmit={handleSearch}
          >
            <div className="search-field">
              <Search size={19} />

              <input
                type="text"
                placeholder="Job title, keyword or company"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />
            </div>

            <div className="search-field">
              <MapPin size={19} />

              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) =>
                  setLocation(e.target.value)
                }
              />
            </div>

            <button type="submit">
              <Search size={18} />
              Search Jobs
            </button>
          </form>

        </div>
      </section>

      {/* Content */}

      <section className="jobs-container">

        {/* Filters */}

        <aside className="jobs-sidebar">

          <div className="filter-title">
            <SlidersHorizontal size={19} />

            <h2>Filters</h2>
          </div>

          {/* Job Type */}

          <div className="filter-group">

            <h3>Job Type</h3>

            <label>
              <input
                type="radio"
                name="jobType"
                value=""
                checked={jobType === ""}
                onChange={(e) =>
                  setJobType(e.target.value)
                }
              />
              All Types
            </label>

            <label>
              <input
                type="radio"
                name="jobType"
                value="Full Time"
                checked={jobType === "Full Time"}
                onChange={(e) =>
                  setJobType(e.target.value)
                }
              />
              Full Time
            </label>

            <label>
              <input
                type="radio"
                name="jobType"
                value="Part Time"
                checked={jobType === "Part Time"}
                onChange={(e) =>
                  setJobType(e.target.value)
                }
              />
              Part Time
            </label>

            <label>
              <input
                type="radio"
                name="jobType"
                value="Remote"
                checked={jobType === "Remote"}
                onChange={(e) =>
                  setJobType(e.target.value)
                }
              />
              Remote
            </label>

          </div>

          {/* Category */}

          <div className="filter-group">

            <h3>Category</h3>

            <label>
              <input
                type="radio"
                name="category"
                value=""
                checked={category === ""}
                onChange={(e) =>
                  setCategory(e.target.value)
                }
              />
              All Categories
            </label>

            <label>
              <input
                type="radio"
                name="category"
                value="Development"
                checked={category === "Development"}
                onChange={(e) =>
                  setCategory(e.target.value)
                }
              />
              Development
            </label>

            <label>
              <input
                type="radio"
                name="category"
                value="Design"
                checked={category === "Design"}
                onChange={(e) =>
                  setCategory(e.target.value)
                }
              />
              Design
            </label>

          </div>

          {/* Experience */}

          <div className="filter-group">

            <h3>Experience Level</h3>

            <label>
              <input type="checkbox" />
              Entry Level
            </label>

            <label>
              <input type="checkbox" />
              Mid Level
            </label>

            <label>
              <input type="checkbox" />
              Senior Level
            </label>

          </div>

          <button
            className="clear-filters"
            onClick={() => {
              setSearch("");
              setLocation("");
              setJobType("");
              setCategory("");
            }}
          >
            Clear All Filters
          </button>

        </aside>

        {/* Jobs */}

        <div className="jobs-results">

          <div className="jobs-results-header">

            <div>
              <h2>Available Jobs</h2>

              <p>
                {filteredJobs.length} jobs found
              </p>
            </div>

            <select>
              <option>Latest</option>
              <option>Oldest</option>
              <option>Highest Salary</option>
            </select>

          </div>

          {/* Cards */}

          <div className="jobs-list">

            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (

                <article
                  className="job-card"
                  key={job.id}
                >

                  <div className="job-card-header">

                    <div className="company-logo">
                      {job.company.charAt(0)}
                    </div>

                    <div className="job-main-info">

                      <h3>{job.title}</h3>

                      <p>{job.company}</p>

                    </div>

                    <button
                      className="save-job"
                      aria-label="Save job"
                    >
                      ♡
                    </button>

                  </div>

                  <div className="job-info">

                    <span>
                      <MapPin size={16} />
                      {job.location}
                    </span>

                    <span>
                      <BriefcaseBusiness size={16} />
                      {job.type}
                    </span>

                    <span>
                      <DollarSign size={16} />
                      {job.salary}
                    </span>

                    <span>
                      <Clock3 size={16} />
                      {job.experience}
                    </span>

                  </div>

                  <div className="job-card-footer">

                    <div className="job-tags">
                      {job.tags.map((tag) => (
                        <span key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/jobs/${job.id}`}
                      className="view-job"
                    >
                      View Job
                    </Link>

                  </div>

                </article>

              ))
            ) : (

              <div className="no-jobs">
                <Search size={40} />

                <h3>No jobs found</h3>

                <p>
                  Try changing your search or filters.
                </p>
              </div>

            )}

          </div>

          {/* Pagination */}

          <div className="pagination">

            <button>
              <ChevronLeft size={17} />
            </button>

            <button className="active">
              1
            </button>

            <button>
              2
            </button>

            <button>
              3
            </button>

            <span>...</span>

            <button>
              10
            </button>

            <button>
              <ChevronRight size={17} />
            </button>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Jobs;