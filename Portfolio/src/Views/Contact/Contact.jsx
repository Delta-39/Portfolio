import React from "react";
import styles from "./Contact.module.css";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className={styles.container} id="contact">
      <h2 className={styles.contactTitle}>Contact</h2>
      <div className={styles.contactContainer}>
        <div className={styles.contactForm}>
          <form action="">
            <div className={styles.inputField}>
              <input type="text" name="name" id="name" />
              <label htmlFor="name">Name:</label>
            </div>
            <div className={styles.inputField}>
              <input type="email" name="email" id="email" />
              <label htmlFor="email">Email:</label>
            </div>
            <div>
              <label htmlFor="message">Tell what can I help you with:</label>
              <textarea rows="5"></textarea>
            </div>
            <button>Send</button>
          </form>
        </div>
        <div className={styles.container_socialNetwork}>
          <h3>My social network</h3>
          <div className={styles.socialNetwork}>
            <a href="">
              <FaGithub />
            </a>
            <a href="">
              <FaLinkedin />
            </a>
            <a href="">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
