import {
  BriefcaseBusiness,
  Building2,
  Search,
  ShieldCheck,
  Zap,
  Users,
} from "lucide-react";


const features = [
  {
    id: 1,
    icon: <BriefcaseBusiness />,
    title: "Thousands of Jobs",
    description:
      "Explore thousands of job opportunities from different industries and companies.",
  },
  {
    id: 2,
    icon: <Building2 />,
    title: "Top Companies",
    description:
      "Discover opportunities from trusted companies looking for talented professionals.",
  },
  {
    id: 3,
    icon: <Search />,
    title: "Easy Job Search",
    description:
      "Find the right job quickly using powerful search and filtering options.",
  },
  {
    id: 4,
    icon: <Zap />,
    title: "Fast Application",
    description:
      "Apply to your favorite jobs quickly and take the next step in your career.",
  },
  {
    id: 5,
    icon: <ShieldCheck />,
    title: "Trusted Platform",
    description:
      "A secure platform designed to make the hiring process easier and more reliable.",
  },
  {
    id: 6,
    icon: <Users />,
    title: "For Everyone",
    description:
      "Whether you're a job seeker or an employer, JobHub has tools for you.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose">

      <div className="why-container">

        {/* Header */}

        <div className="why-header">

          <span className="why-label">
            WHY CHOOSE US
          </span>

          <h2>
            Everything you need to
            <span> grow your career</span>
          </h2>

          <p>
            We make finding the right job and hiring
            talented people easier, faster, and simpler.
          </p>

        </div>


        {/* Features */}

        <div className="why-grid">

          {features.map((feature) => (

            <article
              className="why-card"
              key={feature.id}
            >

              <div className="why-icon">
                {feature.icon}
              </div>

              <div className="why-content">

                <h3>
                  {feature.title}
                </h3>

                <p>
                  {feature.description}
                </p>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;