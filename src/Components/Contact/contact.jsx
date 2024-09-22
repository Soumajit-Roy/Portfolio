import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact-el" id="ctc-tag">
      <div className="headings">
        <h2>📲 Get in touch</h2>
      </div>

      <div className="icons-wrapper">
      <ul class="social-icons">
  <li>
    <a
      className="hvr-pulse-grow"
      href="https://www.linkedin.com/in/soumajitroy/"
      target="_blank"
    >
      <img
        src="https://img.icons8.com/?size=100&id=MR3dZdlA53te&format=png&color=000000"
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
        src="https://img.icons8.com/?size=100&id=LoL4bFzqmAa0&format=png&color=000000"
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
        src="https://img.icons8.com/?size=100&id=38375&format=png&color=000000"
        alt="CodePen"
      />
    </a>
  </li>
  <li>
    <a className="hvr-pulse-grow" href="mailto:itssoumajit@gmail.com">
      <img
        src="https://img.icons8.com/?size=100&id=eFPBXQop6V2m&format=png&color=000000"
        alt="Gmail"
      />
    </a>
  </li>
</ul>
</div>

    </div>
  );
}
