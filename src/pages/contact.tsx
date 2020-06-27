// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

type DataProps = {
    site: {
        buildTime: string
    }
}

const Contact: React.FC<PageProps<DataProps>> = ({ data, path }) => (
    <Layout>
        <Header headerText='Contact' />
        <SEO title="Using TypeScript" />
        <h1>Gatsby supports TypeScript by default!</h1>
        <p>This means that you can create and write <em>.ts/.tsx</em> files for your pages, components etc. Please note that the <em>gatsby-*.js</em> files (like gatsby-node.js) currently don't support TypeScript yet.</p>
        <p>For type checking you'll want to install <em>typescript</em> via npm and run <em>tsc --init</em> to create a <em>.tsconfig</em> file.</p>
        <p>You're currently on the page "{path}" which was built on {data.site.buildTime}.</p>
        <p>To learn more, head over to our <a href="https://www.gatsbyjs.org/docs/typescript/">documentation about TypeScript</a>.</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default Contact

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
  `