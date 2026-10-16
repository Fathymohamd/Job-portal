import { Search, MapPin } from "lucide-react";

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-content">
          <span className="hero-badge">
            Find your next opportunity
          </span>

          <h1>
            Find Your
            <span> Dream Job</span>
          </h1>

          <p>
            Discover thousands of job opportunities from top companies
            and take the next step in your career.
          </p>

          <div className="hero-search">
            <div className="search-box">
             <Search size={12} /> 
              <input
                type="text"
                placeholder="Job title, keyword..."
              />
            </div>

            <div className="search-box">
             <MapPin size={20} />
              <input
                type="text"
                placeholder="Location..."
              />
            </div>

            <button className="search-btn">
              Search Jobs
            </button>
          </div>

          <div className="hero-popular">
            <strong>Popular:</strong>

            <span>React</span>
            <span>Node.js</span>
            <span>UI/UX</span>
            <span>Marketing</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;