import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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

    console.log("Contact Data:", formData);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact-page">
      <div className="contact-container">

        <div className="contact-header">
          <span>GET IN TOUCH</span>

          <h1>Contact Us</h1>

          <p>
            Have a question or need help? Send us a message
            and we'll get back to you.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-info">

            <h2>Let's Talk</h2>

            <p>
              We're here to help candidates and companies
              get the most out of our platform.
            </p>

            <div className="contact-info-item">
              <div className="contact-icon">    <Mail size={22} /></div>

              <div>
                <h3>Email</h3>
                <p>fathymohamedfathy299@gmail.com</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">    <Phone size={22} /></div>

              <div>
                <h3>Phone</h3>
                <p>+20 10 954 634 68 </p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">    <MapPin  size={22} /></div>

              <div>
                <h3>Location</h3>
                <p>Cairo, Egypt</p>
              </div>
            </div>

          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="name">Name</label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>

              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="contact-button"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;