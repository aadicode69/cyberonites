import React from "react";
import { useNavigate } from "react-router-dom";
import teamData from "./teamData";
import TeamCard from "./TeamCard";
import Footer from "../footer/Footer";
import "./TeamGallery.css";

const TeamGallery = () => {
  const navigate = useNavigate();

  const mentors = teamData.filter(m => m.role === "Mentor");
  const leadership = teamData.filter(m =>
    ["President", "Vice President", "General Secretary", "Treasurer"].includes(m.role)
  );
  const heads = teamData.filter(m => m.role.includes("Head"));
  const devTeam = teamData.filter(m => m.role === "Web Development Team Member");

  return (
    <>
      <div className="team-gallery-container">

        <section className="hero-team-section">
          <div className="hero-content">
            <h1 className="hero-title">TEAM</h1>
            <h1 className="hero-title gradient-text">CYBERONITES</h1>

            <p className="hero-subtitle">
              A cyber-focused collective of engineers, leaders and creators
              building secure, scalable and future-ready systems.
            </p>
          </div>
        </section>
      <section className="team-grid-section">
  <div className="team-cards-grid">

    {mentors.map((member, index) => (
      <TeamCard
        key={`mentor-${member.name}`}
        member={member}
        index={index}
        variant="mentor"
      />
    ))}

    {leadership.map((member, index) => (
      <TeamCard
        key={`leader-${member.name}`}
        member={member}
        index={index + mentors.length}
      />
    ))}

    {heads.map((member, index) => (
      <TeamCard
        key={`head-${member.name}`}
        member={member}
        index={index + mentors.length + leadership.length}
      />
    ))}

    {devTeam.map((member, index) => (
      <TeamCard
        key={`dev-${member.name}`}
        member={member}
        index={index + mentors.length + leadership.length + heads.length}
      />
    ))}

  </div>
</section>
        <button
          className="floating-home-btn"
          onClick={() => navigate("/")}
          aria-label="Go Home"
        >
          ⌂
        </button>
      </div>

      <Footer />
    </>
  );
};

const Section = ({ title, data }) => {
  if (!data.length) return null;

  return (
    <section className="team-grid-section">
      <h2 className="team-section-title">{title}</h2>

      <div className="team-cards-grid">
        {data.map((member, index) => (
          <TeamCard
            key={member.name}
            member={member}
            index={index}
            variant={title === "Mentors" ? "mentor" : "default"}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamGallery;
