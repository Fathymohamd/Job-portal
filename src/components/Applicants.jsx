import { useState } from "react";
import {
  Users,
  Search,
  Eye,
  Mail,
  MapPin,
  BriefcaseBusiness,
  Check,
  X,
} from "lucide-react";


const EmployerApplicants = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const applicants = [
    {
      id: 1,
      name: "Ahmed Mohamed",
      email: "ahmed@example.com",
      job: "Frontend Developer",
      location: "Cairo, Egypt",
      experience: "2 Years",
      status: "Pending",
    },
    {
      id: 2,
      name: "Mohamed Ali",
      email: "mohamed@example.com",
      job: "Backend Developer",
      location: "Alexandria, Egypt",
      experience: "3 Years",
      status: "Accepted",
    },
    {
      id: 3,
      name: "Sara Ahmed",
      email: "sara@example.com",
      job: "UI/UX Designer",
      location: "Cairo, Egypt",
      experience: "1 Year",
      status: "Pending",
    },
    {
      id: 4,
      name: "Omar Hassan",
      email: "omar@example.com",
      job: "Frontend Developer",
      location: "Giza, Egypt",
      experience: "4 Years",
      status: "Rejected",
    },
  ];

  const filteredApplicants = applicants.filter((applicant) => {
    const matchesSearch =
      applicant.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      applicant.job
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ||
      applicant.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <section className="applicants-page">
      <div className="applicants-container">

        {/* Header */}

        <div className="applicants-header">
          <div>
            <span>EMPLOYER</span>

            <h1>Applicants</h1>

            <p>
              Manage and review candidates who applied
              to your jobs.
            </p>
          </div>
        </div>

        {/* Statistics */}

        <div className="applicants-stats">

          <div className="applicant-stat-card">
            <div className="applicant-stat-icon">
              <Users size={22} />
            </div>

            <div>
              <h3>{applicants.length}</h3>
              <p>Total Applicants</p>
            </div>
          </div>

          <div className="applicant-stat-card">
            <div className="applicant-stat-icon">
              <Users size={22} />
            </div>

            <div>
              <h3>
                {
                  applicants.filter(
                    (item) => item.status === "Pending"
                  ).length
                }
              </h3>

              <p>Pending</p>
            </div>
          </div>

          <div className="applicant-stat-card">
            <div className="applicant-stat-icon">
              <Check size={22} />
            </div>

            <div>
              <h3>
                {
                  applicants.filter(
                    (item) => item.status === "Accepted"
                  ).length
                }
              </h3>

              <p>Accepted</p>
            </div>
          </div>

          <div className="applicant-stat-card">
            <div className="applicant-stat-icon">
              <X size={22} />
            </div>

            <div>
              <h3>
                {
                  applicants.filter(
                    (item) => item.status === "Rejected"
                  ).length
                }
              </h3>

              <p>Rejected</p>
            </div>
          </div>

        </div>

        {/* Filters */}

        <div className="applicants-filters">

          <div className="search-box">
            <Search size={18} />

            <input
              type="text"
              placeholder="Search applicants..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
          >
            <option value="All">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Accepted">Accepted</option>
            <option value="Rejected">Rejected</option>
          </select>

        </div>

        {/* Applicants */}

        <div className="applicants-list">

          <div className="applicants-list-header">
            <h2>All Applicants</h2>

            <p>
              {filteredApplicants.length} applicants found
            </p>
          </div>

          {filteredApplicants.length > 0 ? (

            filteredApplicants.map((applicant) => (

              <div
                className="applicant-card"
                key={applicant.id}
              >

                {/* Candidate */}

                <div className="candidate-info">

                  <div className="candidate-avatar">
                    {applicant.name.charAt(0)}
                  </div>

                  <div>

                    <h2>{applicant.name}</h2>

                    <p className="candidate-email">
                      <Mail size={14} />
                      {applicant.email}
                    </p>

                  </div>

                </div>

                {/* Job */}

                <div className="applicant-job">

                  <span>
                    <BriefcaseBusiness size={15} />
                    Applied For
                  </span>

                  <strong>
                    {applicant.job}
                  </strong>

                </div>

                {/* Details */}

                <div className="applicant-details">

                  <span>
                    <MapPin size={15} />
                    {applicant.location}
                  </span>

                  <span>
                    {applicant.experience}
                  </span>

                </div>

                {/* Status */}

                <div className="applicant-status">

                  <span
                    className={`status-badge ${applicant.status.toLowerCase()}`}
                  >
                    {applicant.status}
                  </span>

                </div>

                {/* Actions */}

                <div className="applicant-actions">

                  <button
                    className="view-applicant"
                    title="View Applicant"
                  >
                    <Eye size={17} />
                  </button>

                  {applicant.status === "Pending" && (
                    <>
                      <button
                        className="accept-applicant"
                        title="Accept"
                      >
                        <Check size={17} />
                      </button>

                      <button
                        className="reject-applicant"
                        title="Reject"
                      >
                        <X size={17} />
                      </button>
                    </>
                  )}

                </div>

              </div>

            ))

          ) : (

            <div className="no-applicants">
              <Users size={40} />

              <h3>No applicants found</h3>

              <p>
                Try changing your search or filter.
              </p>
            </div>

          )}

        </div>

      </div>
    </section>
  );
};

export default EmployerApplicants;