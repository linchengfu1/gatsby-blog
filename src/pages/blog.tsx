// import * as React from "react";
// import { Link } from "gatsby";
// import { StaticImage } from "gatsby-plugin-image";

// const Blog = () => {
//   return (
//     <div>
//       <Link to="/">Go to Home Page</Link>
//       My Blog
//       <StaticImage src="../images/new-function.png" alt="new function" />
//     </div>
//   );
// };

// export default Blog;

import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const BlogPage = ({ data }) => {
  console.log(data);
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default BlogPage;
