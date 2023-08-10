import React from "react";
import "./Resume.css"; // Import your custom CSS file for styling

const Resume = ({ data }) => {
  const {
    first_name,
    last_name,
    level,
    profession,
    email,
    phone_number,
    city,
    country,
    pincode,
    github,
    twitter,
    linkedin,
    portfolio_link,
    languages,
    summary,
    accomplishment,
    education,
    work_experience,
    projects,
    skills,
    certificates,
  } = data;

  return (
    <div className="resume">
      <header>
        <h1>{first_name} {last_name}</h1>
        <p className="subheading">{level} {profession}</p>
        <p>{email} | {phone_number}</p>
        <p>{city}, {country} {pincode}</p>
        <p>GitHub: {github} | Twitter: {twitter} | LinkedIn: {linkedin}</p>
        <p>Portfolio: {portfolio_link}</p>
        <p>Languages: {languages}</p>
      </header>
      <section className="section">
        <h2>Summary</h2>
        <p>{summary}</p>
      </section>
      <section className="section">
        <h2>Accomplishment</h2>
        <p>{accomplishment}</p>
      </section>
      <section className="section">
        <h2>Education</h2>
        {education.map((edu) => (
          <div key={edu.education_id} className="sub-section">
            <h3>{edu.school_name}</h3>
            <p>{edu.degree} - {edu.field_of_study}</p>
            <p>{edu.degree_start_date} - {edu.degree_end_date}</p>
          </div>
        ))}
      </section>
      <section className="section">
        <h2>Work Experience</h2>
        {work_experience.map((exp) => (
          <div key={exp.work_id} className="sub-section">
            <h3>{exp.job_title}</h3>
            <p>{exp.company_name} - {exp.company_location}</p>
            <p>{exp.start_date} - {exp.end_date}</p>
            <p>{exp.Description}</p>
          </div>
        ))}
      </section>
      <section className="section">
        <h2>Projects</h2>
        {projects.map((project) => (
          <div key={project.project_id} className="sub-section">
            <h3>{project.project_name}</h3>
            <p>{project.project_link}</p>
            <p>{project.description}</p>
          </div>
        ))}
      </section>
      <section className="section">
        <h2>Skills</h2>
        <div className="skills-list">
          <p><strong>Top Technical Skills:</strong> {skills[0].top_technical_skills}</p>
          <p><strong>Technical Skills:</strong> {skills[0].technical_skills}</p>
          <p><strong>Non-Technical Skills:</strong> {skills[0].non_technical_skills}</p>
          <p><strong>Softwares:</strong> {skills[0].softwares}</p>
        </div>
      </section>
      <section className="section">
        <h2>Certificates</h2>
        {certificates.map((cert) => (
          <div key={cert.certi_id} className="sub-section">
            <h3>{cert.certi_name}</h3>
            <p>{cert.certi_link}</p>
            <p>{cert.certi_start_date} - {cert.certi_end_date}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Resume;
