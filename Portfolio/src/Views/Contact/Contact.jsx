import styles from "./Contact.module.css";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  return (
    <div className={styles.container} id="contact">
      <h2 className={styles.contactTitle}>Contact</h2>
      <div className={styles.contactContainer}>
        <div className={styles.contactForm}>
          <form action="">
            <div className={styles.inputField}>
              <input type="text" name="name" id="name" required />
              <label htmlFor="name">Name</label>
            </div>
            <div className={styles.inputField}>
              <input type="text" name="email" id="email" required/>
              <label htmlFor="email">Email</label>
            </div>
            <div className={styles.textareaContainer}>
              <label htmlFor="message">Tell more about the Project</label>
              <textarea rows="5"></textarea>
            </div>
            <button onClick={handleSubmit} >Send</button>
          </form>
        </div>
        <div className={styles.container_socialNetwork}>
          <h3>My social networks</h3>
          <div className={styles.socialNetwork}>
            <a href="https://github.com/Delta-39">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/juan-martin-terribile-giles-90a4b1229/">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/jmterribile/">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
