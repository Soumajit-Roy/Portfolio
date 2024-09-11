import React from "react";
import { useState } from "react";
import "./about.css";
import avatarPhoto from "../../assets/avatar_org.webp";

export default function About() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  
  return (
    <div className="about-el" id="abt-tag">
      <div className="headings">
        <h2>👨🏻‍💻 About Me</h2>
      </div>
      <div className="avatar-el">
        <img src={avatarPhoto}></img>
      </div>
  
      <div className="abt-desc">
      <div className="abt-me">About Me</div>
        <div className="p1">
        <p>
          I am an Indian Front-End and Web Developer with a solid foundation in
          creating dynamic and interactive projects. My focus is on developing
          user-friendly and efficient solutions that enhance the overall user
          experience.
        </p>
        </div>

        <button onClick={toggleCollapse} className="toggle-button">
        {isCollapsed ? 'More About Me' : 'Hide'}
        </button>

        <div
        id="yourExistingDiv"
        className={`collapsible-content ${isCollapsed ? 'collapsed' : ''}`}
      >

        <div className="p2 para-style">
        <p>
          Originally an Electrical Engineering graduate, I transitioned into web
          development, where I have honed my skills and built a portfolio of
          projects that demonstrate my technical abilities and creativity.
        </p>
        </div>

        <div className="p3 para-style">
        <p>
          I have developed a
          diverse range of projects, including Chrome extensions and e-commerce
          websites. I thrive in collaborative environments and am always eager
          to take on new challenges that push technological boundaries and
          create impactful solutions.
        </p>
        </div>
      </div>

      
        <div className="p2 para-style always-visible-content">
          <p>
            Originally an Electrical Engineering graduate, I transitioned into
            web development, where I have honed my skills and built a portfolio
            of projects that demonstrate my technical abilities and creativity.
          </p>
        </div>

        <div className="p3 para-style always-visible-content">
          <p>
            I have developed a diverse range of projects, including Chrome
            extensions and e-commerce websites. I thrive in collaborative
            environments and am always eager to take on new challenges that push
            technological boundaries and create impactful solutions.
          </p>
        </div>
      


      </div>
    
      <div className="headings">
        <h2>📚 Familier Technologies</h2>
        </div>
      <div className="stack-el">
        <h3 className="sub-head">🔸Languages</h3>
        <ul className="list-style">
          <li className="hvr-buzz-out">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" />
          </li>
          <li className="hvr-buzz-out">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
          </li>
          <li className="hvr-buzz-out">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />
          </li>
        </ul>

        <h3 className="sub-head">🔸Web Tech and Markup Languages</h3>
        <ul className="list-style">
          <li className="hvr-buzz-out">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />
          </li>
          <li className="hvr-buzz-out">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />
          </li>
        </ul>

        <h3 className="sub-head">🔸Frameworks and Libraries</h3>
        <ul className="list-style">
          <li className="hvr-buzz-out">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
          </li>
          <li className="hvr-buzz-out">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
          </li>
          <li className="hvr-buzz-out">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" />
          </li>
          <li className="hvr-buzz-out">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original-wordmark.svg" />
          </li>
        </ul>

        <h3 className="sub-head">🔸Development Tools</h3>
        <ul className="list-style">
          <li className="hvr-buzz-out">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg" />
          </li>
          <li className="hvr-buzz-out">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original.svg" />
          </li>
          <li className="hvr-buzz-out">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" />
          </li>
        </ul>

        <h3 className="sub-head">🔸Version Control</h3>
        <ul className="list-style">
          <li className="hvr-buzz-out">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" />
          </li>
        </ul>
      </div>
    </div>
  );
}
