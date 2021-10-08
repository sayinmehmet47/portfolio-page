import React from "react"
import data from "../yourdata"

const Skills = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <h1>Skills</h1>
          <h1>&</h1>
          <h1>Certificates</h1>
          <div className="skills-grid">
            {data.skills.map((skill, index) => (
              <div className="skill" key={index}>
                <img src={skill.img} alt="css"></img>
                <div style={{ display: "flex" }}>
                  {skill.icon ? (
                    <a href={skill.link} style={{ display: "flex" }}>
                      <img width="25px" src={skill.icon} alt="" />
                      {""}
                      <p style={{ marginLeft: "3px" }}>{skill.description}</p>
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
