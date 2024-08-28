import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact-el" id="ctc-tag">
      <div className="headings">
        <h1>📲 Get in touch</h1>
      </div>

      <ul class="social-icons">
  <li>
    <a
      className="hvr-pulse-grow"
      href="https://www.linkedin.com/in/soumajitroy/"
      target="_blank"
    >
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
        alt="LinkedIn"
      />
    </a>
  </li>
  <li>
    <a
      className="hvr-pulse-grow"
      href="https://github.com/Soumajit-Roy"
      target="_blank"
    >
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
        alt="Github"
      />
    </a>
  </li>
  <li>
    <a
      className="hvr-pulse-grow"
      href="https://codepen.io/Soumajit-Roy"
      target="_blank"
    >
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codepen/codepen-original.svg"
        alt="CodePen"
      />
    </a>
  </li>
  <li>
    <a className="hvr-pulse-grow" href="mailto:itssoumajit@gmail.com">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/768px-Gmail_icon_%282020%29.svg.png?20221017173631"
        alt="Gmail"
      />
    </a>
  </li>
</ul>

    </div>
  );
}
