import React from "react";
import { StaticImage } from "gatsby-plugin-image"

export default () => (
  <div className="portfolioContainer" id="Portfolio">
    <a
      href="https://www.harrisontateph.co.uk/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <StaticImage src="../images/bitmap.png" alt="Portfolio website" />
    </a>
    <a
      href="https://github.com/OJPARKINSON"
      target="_blank"
      rel="noopener noreferrer"
      className="githubLink"
    >
      View more on GitHub
    </a>
  </div>
);