import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { getCompanies } from "../redux/slices/companiesSlice";

import { useEffect } from "react";


const CompaniesArray = () => {

  const dispatch = useDispatch()

const { companies, loading, error } = useSelector(
  (state) => state.companies
);


useEffect(() => { dispatch(getCompanies()); }, [dispatch]); 


if (loading) {
  return (
    <section className="companies-loading">
      <div className="companies-loader"></div>
      <h3>Discovering Top Companies</h3>
      <p>We're finding the best companies for you...</p>
    </section>
  );
}




  return (
    <section className="companies">
      <div className="companies-container">

        <div className="section-header">
          <div>
            <span className="section-label">
              TOP EMPLOYERS
            </span>

            <h2>Top Companies</h2>

            <p>
              Discover companies that are hiring talented people.
            </p>
          </div>

          <Link to="/" className="view-all">
            Companies →
          </Link>
        </div>

        <div className="companies-grid">
    
{companies?.map((company) => (
  <Link
    to={`/companies/${company._id}`}
    className="company-card"
    key={company._id}
  >
    <div className="company-card-logo">
     <img src={company.logo} alt={company.name} />
    </div>

    <h3>{company.name}</h3>

    <p>{company.location}</p>

    <span>
      {company.jobsCount} Open Positions
    </span>
  </Link>
))}
        </div>

      </div>
    </section>
  );
};

export default CompaniesArray;