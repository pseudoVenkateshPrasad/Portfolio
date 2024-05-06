import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleDownload = () => {
    const downloadableLink = 'https://docs.google.com/document/d/1SFQ54cTxPUn8OrkZs8x6FJ9QXE8S_NmjiG-Q902LBtc/edit?usp=sharing';

    window.open(downloadableLink, '_blank');
};
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        My Portfolio
      </a>
      <div className={styles.menu}>
        {/* <div> */}
          
        {/* </div> */}
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <button onClick={handleDownload} className={styles.resume}>
            Download Resume
          </button>
      </div>
    </nav>
  );
};
