import React from "react";

const projects = [
  { title: "Greenbliz", desc: "Delivered as part of internship client work. Built responsive UI and integrated Strapi CMS. Deployed on Render/Heroku.", tech: ["HTML5","CSS3/Sass/Less","JavaScript","Bootstrap","Strapi CMS","Git","Heroku/Render"] },
  { title: "Onblux", desc: "Collaborated with a cross-functional team to implement clean, scalable components and content workflows.", tech: ["JavaScript","Bootstrap","Strapi CMS","Git","Jira"] },
  { title: "Bubble Tea", desc: "Responsive front-end, CMS customization and deployment pipelines with environment configs.", tech: ["HTML5","CSS3","JavaScript","Bootstrap","Strapi CMS","Heroku/Render"] },
  { title: "Adaar & Kotiyagala Villa", desc: "Marketing website with CMS for real-time content updates; followed code-review best practices.", tech: ["HTML5","CSS3","JavaScript","Bootstrap","Strapi CMS"] },
  { title: "BadmintonFlex (Final Year)", desc: "Final-year project. Full-stack build focused on clean architecture and performance.", tech: ["React/Next.js","Node.js","REST APIs","Postgres/MongoDB"] },
  { title: "Skin Consultation Center (2nd Year)", desc: "Desktop/web solution to manage consultations, patients and schedules.", tech: ["Java/JavaFX or React","REST APIs","SQL"] },
  { title: "Boilheater Database Project (2nd Year)", desc: "Designed schema, relationships, ERDs and queries for a boiler/heater domain.", tech: ["MySQL"] },
  { title: "Academic Progress Outcomes Prediction (1st Year)", desc: "Early ML-style exercise predicting outcomes from student features.", tech: ["Python"] },
  { title: "Hero Football Website (1st Year)", desc: "Intro web project focusing on layout, responsiveness and content structure.", tech: ["HTML","CSS","JavaScript"] },
];

export default function Projects() {
  return (
    <section className="services" id="services">
      <div className="max-width">
        <h2 className="title">My Projects</h2>

        <div className="serv-content">
          {projects.map((p) => (
            <div className="card" key={p.title}>
              <div className="box">
                <div className="text">{p.title}</div>
                <p>{p.desc}</p>
                {p.tech?.length ? (
                  <p style={{ marginTop: 8, opacity: 0.9 }}>
                    <strong>Tech:</strong> {p.tech.join(", ")}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
