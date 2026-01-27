import React from "react";

const TeamCard = ({ member, index = 0, variant = "default" }) => {

  if (!member) return null;

  const {
    name,
    role,
    description,
    profileImage,
    linkedin,
    email,
  } = member;

  return (
    <div
      className={`team-card ${variant === "mentor" ? "mentor-card" : ""}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="team-card-image">
        <img
          src={profileImage || "/placeholder.jpg"}
          alt={name || "Team member"}
          loading="lazy"
        />
      </div>

      <div className="team-card-content">
        <h3 className="member-name">{name}</h3>
        <p className="member-role">{role}</p>
        <p className="member-description">{description}</p>

        {(linkedin || email) && (
          <div className="social-links">
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label={`${name}'s LinkedIn`}
              >
                in
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                aria-label={`Email ${name}`}
              >
                @
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
