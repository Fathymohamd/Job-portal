import Navbar from "./components/Navbar"
import JobCard from "./components/JobCard"
import Categories from "./components/Categories/Categories"
import LatestJobs from "./components/LatestJobs"
import Companies from "./components/Companies"
import Footer from "./components/Footer"
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import ForgotPassword from "./Auth/ForgotPassword";
import Jobs from "./components/Findjobs";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Contact from "./components/Contact ";
import PostJob from "./components/PostJob";
import Employer from "./components/Employer";
import EmployerJobs from "./components/EmployerJobs";
import Applicants from "./components/Applicants";
import ResetPassword from "./Auth/ResetPassword";
import Home from "./pages/Home"
import NotFound from "./components/NotFound"
import CompanyDetails from "./components/CompanyDetails"

import  "./Styles/Navbar.css"
import  "./Styles/Home.css"
import  "./Styles/Categories.css"
import  "./Styles/JobCard.css"
import  "./Styles/LatestJobs.css"
import  "./Styles/Companies.css"
import  "./Styles/Footer.css"
import  "./Styles/Register.css"
import  "./Styles/Login.css"
import  "./Styles/Jobs.css"
import  "./Styles/About.css"
import  "./Styles/WhyChooseUs.css"
import  "./Styles/Privacy.css"
import  "./Styles/ForgotPassword.css"
import  "./Styles/Terms.css"
import  "./Styles/Contact.css"
import  "./Styles/PostJob.css"
import  "./Styles/Employer.css"
import  "./Styles/EmployerJobs.css"
import  "./Styles/Applicants.css"
import  "./Styles/ResetPassword.css"
import  "./Styles/NotFound.css"
import  "./Styles/CompanyDetails.css"

import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout"

function App() {

  
  
  return (
    <>
  
    <Routes>
<Route
  path="*"
  element={<NotFound />}
/>
  <Route element={<MainLayout />}>
  <Route path="/" element={<><Home /><Companies/><Categories/><LatestJobs /><WhyChooseUs/></>} />
  <Route path="/jobs" element={<Jobs />} />
  <Route path="/companies" element={<Companies />} />
  <Route path="/about" element={<About />} />
  <Route path="/login" element={<Login />}/>
  <Route path="/forgotPassword" element={<ForgotPassword />}/>
<Route path="/register" element={<Register />} />
<Route path="/terms" element={<Terms />} />
<Route path="/contact" element={<Contact />} />
<Route path="/privacy" element={<Privacy />} />
<Route path="/post-Job" element={<PostJob />} />
<Route path="/employer" element={<Employer />} />
<Route path="/employer/jobs" element={<EmployerJobs />} />
<Route path="/ResetPassword/:token" element={<ResetPassword />} />
<Route path="/employer/applicants" element={<Applicants />} />
<Route path="/companies/:id" element={<CompanyDetails />} />
</Route>
    </Routes>
    </>
  )
}

export default App
