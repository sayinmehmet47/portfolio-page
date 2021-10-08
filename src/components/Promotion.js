import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Promotion = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="promotion-container">
          <Fade bottom cascade>
            <h1>{data.promotionHeading}</h1>
            <div>
              <h2>XYZ Reality - Frontend Developer</h2>
              <p>
                <strong>06/2021 – 09/2021</strong> Building user interfaces for
                websites and/or web applications Working with ReactJS, Redux,
                TypeScript Creating self-contained, reusable, and testable
                modules and components Writing some end-to-end test on Cypress,
                JestJS
              </p>
              <h2>Utest - Tester</h2>
              <p>
                <strong> 03/2020–02/2021</strong> As a tester, I tested various
                applications and websites, found and reported bugs. For example,
                I tested Letgo and Airbnb applications
              </p>
            </div>
          </Fade>
          <p>{data.promotionPara}</p>
        </div>
      </div>
    </div>
  )
}

export default Promotion
