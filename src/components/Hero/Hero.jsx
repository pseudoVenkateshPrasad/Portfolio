import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Venkatesh Kotipalli</h1>
        <p className={styles.description}>
        "Full-stack developer with 3 years of experience in crafting robust and scalable web applications. Proficient in both frontend & backend development, delivering efficient solutions."
        </p>
        <a href="mailto:venkatesh.prasad2096@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <div style={{boxShadow: "0px 0px 30px 10px #000, 0px 0px 40px 10px #000 inset", borderRadius:"50%"}}>
        <img
          src={getImageUrl("hero/hero.png")}
          alt="Hero image of me"
          className={styles.heroImg}
        />
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
