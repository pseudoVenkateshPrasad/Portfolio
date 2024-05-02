import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Venkatesh Kotipalli</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 3 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:venkatesh.prasad2096@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <div>
        <img
          src={getImageUrl("hero/hero.JPG")}
          alt="Hero image of me"
          className={styles.heroImg}
          style={{
            height: "60vh", width: "30vw", borderRadius: "50%",
            boxShadow: "0px 0px 40px 10px #0b2447"
          }}
        />
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
