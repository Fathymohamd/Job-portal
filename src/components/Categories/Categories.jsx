import {
  Code2,
  Palette,
  BarChart3,
  Megaphone,
  Stethoscope,
  GraduationCap,
  BriefcaseBusiness,
  Headphones,
} from "lucide-react";



const categories = [
  {
    id: 1,
    title: "Technology",
    jobs: "1,240 Jobs",
    icon: Code2,
  },
  {
    id: 2,
    title: "Design",
    jobs: "850 Jobs",
    icon: Palette,
  },
  {
    id: 3,
    title: "Finance",
    jobs: "620 Jobs",
    icon: BarChart3,
  },
  {
    id: 4,
    title: "Marketing",
    jobs: "540 Jobs",
    icon: Megaphone,
  },
  {
    id: 5,
    title: "Healthcare",
    jobs: "430 Jobs",
    icon: Stethoscope,
  },
  {
    id: 6,
    title: "Education",
    jobs: "380 Jobs",
    icon: GraduationCap,
  },
  {
    id: 7,
    title: "Business",
    jobs: "720 Jobs",
    icon: BriefcaseBusiness,
  },
  {
    id: 8,
    title: "Customer Service",
    jobs: "290 Jobs",
    icon: Headphones,
  },
];

const Categories = () => {
  return (
    <section className="categories">
      <div className="categories-container">

        <div className="categories-header">
          <div>
            <span className="section-label">Explore Opportunities</span>

            <h2>Browse Jobs By Category</h2>

            <p>
              Explore opportunities across different industries and find
              the perfect job for your skills.
            </p>
          </div>

          <button className="view-all-btn">
            View All Categories →
          </button>
        </div>

        <div className="categories-grid">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div className="category-card" key={category.id}>
                <div className="category-icon">
                  <Icon size={26} strokeWidth={1.8} />
                </div>

                <div className="category-info">
                  <h3>{category.title}</h3>
                  <span>{category.jobs}</span>
                </div>

                <div className="category-arrow">
                  →
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Categories;