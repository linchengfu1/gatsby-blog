import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Blog = () => {
  return (
    <div>
      <Link to="/">Go to Home Page</Link>
      My Blog
      <StaticImage src="../images/new-function.png" alt="new function" />
    </div>
  );
};

export default Blog;
