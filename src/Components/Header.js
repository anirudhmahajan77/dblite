import React, { Component } from 'react'
import styles from "../Stylesheets/Header.module.css";
import logo from "../Assets/logo.png";

export class Header extends Component {
  render() {
    return (
      <div className={styles.headerContainer}>
          <div className={styles.logo} data-img-url={logo}></div>
          <p className={styles.credit}>Made By <a href='https://anirudhmahajan.netlify.app/' target={"_blank"} rel="noreferrer">Anirudh Mahajan</a>.</p>
      </div>
    )
  }
}

export default Header