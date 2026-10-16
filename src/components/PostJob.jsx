import { useState } from "react";
import { useNavigate } from "react-router-dom";


const PostJob = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "Full Time",
    salary: "",
    category: "",
    description: "",
    requirements: "",
    skills: "",
    deadline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("JOB DATA:", formData);

    // بعد ربط Backend
    // fetch("http://localhost:8080/api/jobs", ...)

    setFormData({
      title: "",
      company: "",
      location: "",
      type: "Full Time",
      salary: "",
      category: "",
      description: "",
      requirements: "",
      skills: "",
      deadline: "",
    });

    navigate("/jobs");
  };

  return (
    <section className="post-job-page">
      <div className="post-job-container">

        <div className="post-job-header">
          <span>FOR EMPLOYERS</span>

          <h1>Post a Job</h1>

          <p>
            Find the right candidate by posting your job
            opportunity on our platform.
          </p>
        </div>

        <form
          className="post-job-form"
          onSubmit={handleSubmit}
        >

          {/* Basic Information */}

          <div className="form-section">
            <h2>Basic Information</h2>

            <div className="form-grid">

              <div className="form-group">
                <label>Job Title</label>

                <input
                  type="text"
                  name="title"
                  placeholder="e.g. Frontend Developer"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Company</label>

                <input
                  type="text"
                  name="company"
                  placeholder="Company name"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Location</label>

                <input
                  type="text"
                  name="location"
                  placeholder="e.g. Cairo, Egypt"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Job Type</label>

                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                >
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Remote">Remote</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <div className="form-group">
                <label>Salary</label>

                <input
                  type="text"
                  name="salary"
                  placeholder="e.g. 15K - 25K EGP"
                  value={formData.salary}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Category</label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Web Development">
                    Web Development
                  </option>
                  <option value="Mobile Development">
                    Mobile Development
                  </option>
                  <option value="UI/UX Design">
                    UI/UX Design
                  </option>
                  <option value="Data Science">
                    Data Science
                  </option>
                  <option value="Marketing">
                    Marketing
                  </option>
                  <option value="Business">
                    Business
                  </option>
                </select>
              </div>

            </div>
          </div>

          {/* Job Description */}

          <div className="form-section">

            <h2>Job Details</h2>

            <div className="form-group">
              <label>Job Description</label>

              <textarea
                name="description"
                rows="6"
                placeholder="Describe the job..."
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Requirements</label>

              <textarea
                name="requirements"
                rows="6"
                placeholder="Enter job requirements..."
                value={formData.requirements}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Required Skills</label>

              <input
                type="text"
                name="skills"
                placeholder="React, JavaScript, CSS, Git"
                value={formData.skills}
                onChange={handleChange}
                required
              />

              <small>
                Separate skills with commas.
              </small>
            </div>

          </div>

          {/* Deadline */}

          <div className="form-section">

            <h2>Application Details</h2>

            <div className="form-group">

              <label>Application Deadline</label>

              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                required
              />

            </div>

          </div>

          {/* Buttons */}

          <div className="form-actions">

            <button
              type="button"
              className="cancel-button"
              onClick={() => navigate("/jobs")}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="post-job-button"
            >
              Post Job
            </button>

          </div>

        </form>

      </div>
    </section>
  );
};

export default PostJob;