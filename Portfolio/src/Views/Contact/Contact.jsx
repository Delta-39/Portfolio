import styles from "./Contact.module.css";
import { useState } from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import astronaut from "../../assets/astronaut.png"
import validate from "./Validate";
import StackOption from "../../Components/StackOption/StackOption";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    stack: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
    validate(setErrors, data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className={styles.container} id="contact">
      <h2 className={styles.contactTitle}>Contact</h2>
      <div className={styles.contactContainer}>
        <div className={styles.contactForm}>
          <form action="">
            <div className={styles.inputField}>
              <input
                onChange={handleChange}
                type="text"
                name="name"
                id="name"
                required
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className={styles.inputField}>
              <input
                onChange={handleChange}
                type="text"
                name="email"
                id="email"
                required
              />
              <label htmlFor="email">Email</label>
            </div>

            <div className={styles.typeProjectContainer} >
              <h4>Type of Project</h4>
              <div className={styles.stackContainer} >
                <StackOption
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                  setData={setData}
                />
              </div>
            </div>

            <div className={styles.textareaContainer}>
              <label htmlFor="message">Tell more about the Project</label>
              <textarea
                onChange={handleChange}
                name="message"
                rows="5"
              ></textarea>
            </div>
            <button onClick={handleSubmit}>Send</button>
          </form>
        </div>
        <div className={styles.container_socialNetwork}>
          <div className={styles.heroImage} >
            <img src={astronaut} alt="astronaut-hero"/>
          </div>
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
