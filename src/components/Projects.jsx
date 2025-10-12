// src/components/Projects.jsx
import React from "react";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Stack,
} from "@mui/material";

const projects = [
  { title: "Greenbliz",
    desc: "Delivered as part of internship client work. Built responsive UI and integrated Strapi CMS. Deployed on Render/Heroku.",
    tech: ["HTML5","CSS3/Sass/Less","JavaScript","Bootstrap","Strapi CMS","Git","Heroku/Render"],
    img: "./images/projects/banner.jpg" },
  { title: "Onblux",
    desc: "Collaborated with a cross-functional team to implement clean, scalable components and content workflows.",
    tech: ["JavaScript","Bootstrap","Strapi CMS","Git","Jira"],
    img: "./images/projects/banner.jpg" },
  { title: "Bubble Tea",
    desc: "Responsive front-end, CMS customization and deployment pipelines with environment configs.",
    tech: ["HTML5","CSS3","JavaScript","Bootstrap","Strapi CMS","Heroku/Render"],
    img: "./images/projects/banner.jpg" },
  { title: "Adaar & Kotiyagala Villa",
    desc: "Marketing website with CMS for real-time content updates; followed code-review best practices.",
    tech: ["HTML5","CSS3","JavaScript","Bootstrap","Strapi CMS"],
    img: "./images/projects/banner.jpg" },
  { title: "BadmintonFlex (Final Year)",
    desc: "Final-year project. Full-stack build focused on clean architecture and performance.",
    tech: ["React/Next.js","Node.js","REST APIs","Postgres/MongoDB"],
    img: "./images/projects/banner.jpg" },
  { title: "Skin Consultation Center (2nd Year)",
    desc: "Desktop/web solution to manage consultations, patients and schedules.",
    tech: ["Java/JavaFX or React","REST APIs","SQL"],
    img: "./images/projects/banner.jpg" },
  { title: "Boilheater Database Project (2nd Year)",
    desc: "Designed schema, relationships, ERDs and queries for a boiler/heater domain.",
    tech: ["MySQL"],
    img: "./images/projects/banner.jpg" },
  { title: "Academic Progress Outcomes Prediction (1st Year)",
    desc: "Early ML-style exercise predicting outcomes from student features.",
    tech: ["Python"],
    img: "./images/projects/banner.jpg" },
  { title: "Hero Football Website (1st Year)",
    desc: "Intro web project focusing on layout, responsiveness and content structure.",
    tech: ["HTML","CSS","JavaScript"],
    img: "./images/projects/banner.jpg" },

    
];
const CARD_HEIGHT = 380;
const MEDIA_HEIGHT = 160;
const BG = "#11172a";        // page / section background
const TEXT = "#626c7d";       // body text
const TEXT_LIGHT = "#dfe5ec"; // headings
const ACCENT = "#7ac1e4";     // chips, links, buttons
const CARD_BG = "#161e3a";    // card background
const BORDER_SUBTLE = "rgba(223,229,236,0.12)";
const SHADOW = "0 6px 18px rgba(0,0,0,.25)";

export default function Projects() {
  return (
    <section className="services" id="services" style={{ background: BG }}>
      <div className="max-width">
        <h2 className="title" style={{ color: TEXT_LIGHT }}>My Projects</h2>

        <div className="row g-4">
          {projects.map((p) => (
            <div key={p.title} className="col-12 col-sm-6 col-md-4">
              <div
                className="card h-100"
                style={{
                  height: CARD_HEIGHT,
                  background: CARD_BG,
                  border: `1px solid ${BORDER_SUBTLE}`,
                  boxShadow: SHADOW,
                  borderRadius: 12,
                  overflow: "hidden",
                  color: TEXT_LIGHT,
                }}
              >
                {p.img ? (
                  <img
                    src={p.img}
                    alt={p.title}
                    style={{ height: MEDIA_HEIGHT, width: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <div style={{ height: MEDIA_HEIGHT, background: "rgba(255,255,255,0.04)" }} />
                )}

                <div className="card-body d-flex flex-column" style={{ gap: 8, minHeight: 0 }}>
                  <h5 className="card-title" style={{ color: TEXT_LIGHT, fontWeight: 600 }}>
                    {p.title}
                  </h5>
                  <p
                    className="card-text mb-2"
                    style={{
                      color: TEXT,
                      flexGrow: 1,
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {p.desc}
                  </p>

                  {p.tech?.length ? (
                      <div className="d-flex flex-wrap gap-2">
                        {p.tech.slice(0, 8).map((t) => (
                          <span
                            key={t}
                            className="badge rounded-pill"
                            style={{
                              background: "transparent",
                              color: ACCENT,
                              border: `1px solid ${ACCENT}`,
                              fontWeight: 500,
                            }}
                          >
                            {t}
                          </span>
                        ))}

                        {p.tech.length > 8 && (
                          <span
                            className="badge rounded-pill"
                            style={{ background: ACCENT, color: BG, fontWeight: 600 }}
                            aria-label={`and ${p.tech.length - 8} more`}
                            title={`+${p.tech.length - 8} more`}
                          >
                            +{p.tech.length - 8}
                          </span>
                        )}
                      </div>
                    ) : null}

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}