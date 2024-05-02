import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact Me</h2>
        {/* <p>Feel free to reach out!</p> */}
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>

          <a href="mailto:venkatesh.prasad2096@gmail.com">
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" /></a>
        </li>
        <li className={styles.link}>

          <a href="https://www.linkedin.com/in/venkatesh-kotipalli-1424411b4/">

            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
          </a>
        </li>
        <li className={styles.link}>

          <a href="https://github.com/pseudoVenkateshPrasad?tab=repositories">
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
};
