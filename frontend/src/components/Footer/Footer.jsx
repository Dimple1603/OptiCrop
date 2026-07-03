import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaLeaf
} from "react-icons/fa";

function Footer() {

  return (

    <footer className="footer" id="about">

      <div className="footer-container">

        {/* Company */}

        <div className="footer-column">

          <h2 className="footer-logo">

            <FaLeaf />

            <span>OptiCrop</span>

          </h2>

          <p>

            OptiCrop is an AI-powered Smart Agricultural
            Production Optimization Engine that recommends
            the most suitable crop using Machine Learning
            based on soil nutrients and environmental
            conditions.

          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-column">

          <h3>Quick Links</h3>

          <a href="#">Home</a>

          <a href="#predict">Predict Crop</a>

          <a href="#analytics">Analytics</a>

          <a href="#about">About</a>

        </div>

        {/* Technologies */}

        <div className="footer-column">

          <h3>Technology Stack</h3>

          <span>⚛ React.js</span>

          <span>🐍 Python</span>

          <span>🔥 Flask</span>

          <span>🤖 Scikit-Learn</span>

          <span>📊 Pandas</span>

          <span>📈 NumPy</span>

        </div>

        {/* Contact */}

        <div className="footer-column">

          <h3>Connect</h3>

          <a
            href="https://github.com/Dimple1603"
            target="_blank"
            rel="noopener noreferrer"
          >

            <FaGithub />

            GitHub

          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >

            <FaLinkedin />

            LinkedIn

          </a>

          <a href="mailto:dimplejagili.199@gmail.com">

            <FaEnvelope />

            dimplejagili.199@gmail.com

          </a>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 OptiCrop | Built with ❤️ using React, Flask &
        Machine Learning

      </div>

    </footer>

  );

}

export default Footer;