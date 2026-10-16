import { Link } from "react-router-dom";
import { BriefcaseBusiness, Search, House, ArrowLeft } from "lucide-react";


function NotFound() {
return ( <div className="job-404-page"> <div className="job-404-card"> <div className="job-404-icon"> <BriefcaseBusiness size={38} /> </div>

    <p className="job-404-label">ERROR 404</p>

    <h1>
      Page Not Found<span>!</span>
    </h1>

    <p className="job-404-description">
      The URL you entered is invalid or this page doesn't exist.
      Please check the link and try again.
    </p>

    <div className="job-404-actions">
      <Link to="/" className="job-404-home">
        <House size={18} />
        Back to Home
        <ArrowLeft size={17} />
      </Link>

      <Link to="/jobs" className="job-404-jobs">
        <Search size={18} />
        Explore Jobs
      </Link>
    </div>

    <div className="job-404-footer">
      <span className="job-404-dot"></span>
      Your next career opportunity is waiting for you.
    </div>
  </div>
</div>

);
}

export default NotFound;
