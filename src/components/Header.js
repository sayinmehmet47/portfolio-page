import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import GitHubCalendar from "react-github-calendar"
import { Row } from "react-bootstrap"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2>
              Hi, I'm {data.name}{" "}
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : "Building digital"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[1]
                  ? data.headerTagline[1]
                  : "products, brands"}
              </h1>
            </div>
          </Fade>
          <Fade bottom>
            <Row
              style={{
                justifyContent: "center",
                paddingBottom: "10px",
                width: "88vw",
                marginLeft: "7px",
              }}
            >
              <GitHubCalendar
                username="sayinmehmet47"
                blockSize={15}
                blockMargin={5}
                fontSize={8}
              />
            </Row>{" "}
          </Fade>
          <Fade bottom>
            <a
              href={`mailto:${
                data.contactEmail ? data.contactEmail : "hello@mehmetsayin.com"
              }`}
              className="primary-btn"
            >
              CONNECT WITH ME
            </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
