
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaLocationDot,
  FaBuilding,
  FaBriefcase,
  FaGlobe,
  FaCircleInfo,
} from "react-icons/fa6";

function CompanyDetails() {
  const { id } = useParams();

  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getCompany = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/companies/${id}`
        );

        if (!response.ok) {
          throw new Error("Failed to load company details");
        }

        const data = await response.json();

        setCompany(data.company || data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getCompany();
  }, [id]);

  if (loading) {
    return <p className="company-details-loading">Loading company...</p>;
  }

  if (error || !company) {
    return (
      <p className="company-details-error">
        {error || "Company not found"}
      </p>
    );
  }

  return (
  
<div className="company-details-page">
  <Link to="/companies" className="company-details-back">
    <FaArrowLeft />
    Back to Companies
  </Link>

  <div className="company-details-card">
    <div className="company-details-header">
      <img
        src={company.logo}
        alt={`${company.name} logo`}
        className="company-details-logo"
      />

      <div>
        <h1>{company.name}</h1>

        <p className="company-details-industry">
          <FaBuilding />
          {company.industry || "Not specified"}
        </p>
      </div>
    </div>

    <div className="company-details-info">
      <div className="company-details-item">
        <span>
          <FaLocationDot />
          Location
        </span>
        <p>{company.location || "Not specified"}</p>
      </div>

      <div className="company-details-item">
        <span>
          <FaBuilding />
          Industry
        </span>
        <p>{company.industry || "Not specified"}</p>
      </div>

      <div className="company-details-item">
        <span>
          <FaBriefcase />
          Open Positions
        </span>
        <p>{company.jobsCount ?? 0}</p>
      </div>

      <div className="company-details-item">
        <span>
          <FaGlobe />
          Website
        </span>
        {company.website ? (
          <a className="link"
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </a>
        ) : (
          <p>Not specified</p>
        )}
      </div>
    </div>

    <div className="company-details-description">
      <h2>
        <FaCircleInfo />
        About the Company
      </h2>

      <p>
        {company.description ||
          "No company description available."}
      </p>
    </div>

    <Link
      to={`/jobs?company=${company._id}`}
      className="company-details-jobs-btn"
    >
      <FaBriefcase />
      View Jobs
    </Link>
  </div>
</div>

  );
}

export default CompanyDetails;



