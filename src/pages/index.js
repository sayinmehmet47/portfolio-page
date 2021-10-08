import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Skills from "../components/skills"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio Template" />
    <Header></Header>

    <hr />
    <Work></Work>
    <hr />
    <About></About>
    <hr />

    <Skills></Skills>
    <hr />

    <Promotion></Promotion>
    <hr />

    <Footer></Footer>
  </Layout>
)

export default IndexPage
