import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Portfolio = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form fields
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4 animate-fade-in-down">Welcome, I'm ABC</h1>
            <p className="text-xl mb-6 animate-fade-in-up">Full Stack Developer & UI/UX Enthusiast</p>
            <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-full inline-flex items-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-100">
              <FaDownload className="mr-2" />
              Download Resume
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              alt="ABC"
              className="rounded-full w-64 h-64 object-cover mx-auto animate-fade-in"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="about">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="bg-white shadow-lg rounded-lg p-8">
            <p className="text-gray-700 mb-6">
              I'm a passionate Full Stack Developer with expertise in React.js, Spring Boot, MySQL, JavaScript, and Express.js. With a strong foundation in both front-end and back-end technologies, I strive to create efficient and user-friendly web applications.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Education</h3>
                <p>Bachelor's in Computer Science</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Experience</h3>
                <p>5+ years in web development</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Location</h3>
                <p>New York, USA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-200 py-20 px-4 sm:px-6 lg:px-8" id="projects">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Mufama"
              description="An e-commerce platform for fashion accessories."
              image="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWNvbW1lcmNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              link="https://www.mufama.com"
            />
            <ProjectCard
              title="Mufma"
              description="A social media management tool for businesses."
              image="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29jaWFsJTIwbWVkaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              link="https://www.mufma.com"
            />
            <ProjectCard
              title="Portfolio Website"
              description="A personal portfolio website showcasing my skills and projects."
              image="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              link="#"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="experience">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Cloudsmaya Services Pvt. Ltd.</h3>
            <p className="text-gray-600 mb-4">Senior Full Stack Developer | 2018 - Present</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Managed e-commerce projects and led a development team of 5 members</li>
              <li>Implemented scalable solutions using React.js, Spring Boot, and MySQL</li>
              <li>Improved website performance by 40% through optimization techniques</li>
              <li>Collaborated with cross-functional teams to deliver high-quality products</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-200 py-20 px-4 sm:px-6 lg:px-8" id="skills">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SkillBar skill="React.js" percentage={90} />
            <SkillBar skill="Spring Boot" percentage={85} />
            <SkillBar skill="MySQL" percentage={80} />
            <SkillBar skill="JavaScript" percentage={95} />
            <SkillBar skill="Express.js" percentage={85} />
            <SkillBar skill="HTML/CSS" percentage={90} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="contact">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <div className="bg-white shadow-lg rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <p className="flex items-center mb-2">
                  <MdEmail className="mr-2" /> abc@example.com
                </p>
                <p className="flex items-center mb-2">
                  <FaLinkedin className="mr-2" />
                  <a
                    href="https://www.linkedin.com/in/abc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    LinkedIn Profile
                  </a>
                </p>
                <p className="flex items-center">
                  <FaGithub className="mr-2" />
                  <a
                    href="https://github.com/abc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    GitHub Profile
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Send a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProjectCard = ({ title, description, image, link }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-bold hover:underline"
      >
        View Project
      </a>
    </div>
  </div>
);

const SkillBar = ({ skill, percentage }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-blue-700 dark:text-white">{skill}</span>
      <span className="text-sm font-medium text-blue-700 dark:text-white">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div
        className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

export default Portfolio;