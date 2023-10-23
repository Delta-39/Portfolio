import styles from "./Contact.module.css";
import { useState } from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";
import astronaut from "../../assets/astronaut.png"
import { validate } from "./Validate";
import StackOption from "../../Components/StackOption/StackOption";
import axios from 'axios';
import { API_URL } from "../../utils/routes";

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
    stack: ""
  });

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value })
    setErrors(validate({ ...data, [name]: value }))
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(data))
    sendEmail()
  };

  const sendEmail = async () =>{
    try {
      const response = await axios.post(`${API_URL}/contact`,data)
      alert(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.container} id="contact">
      <h2 data-aos="fade-up" data-aos-duration={2000} className={styles.contactTitle}>Contact</h2>
      <div className={styles.contactContainer}>
        <div data-aos="fade-left" data-aos-duration={2000} className={styles.contactForm}>
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
              {errors.name &&
                <div className={styles.errorContainer}>
                  <BiInfoCircle />
                  <p>{errors.name}</p>
                </div>}
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
              {errors.email &&
                <div className={styles.errorContainer}>
                  <BiInfoCircle />
                  <p>{errors.email}</p>
                </div>}
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
              {errors.stack &&
                <div className={styles.errorContainer}>
                  <BiInfoCircle />
                  <p>{errors.stack}</p>
                </div>}
            </div>

            <div className={styles.textareaContainer}>
              <label htmlFor="message">Tell more about the Project</label>
              <textarea
                onChange={handleChange}
                name="message"
                rows="5"
              ></textarea>
              {errors.message &&
                <div className={styles.errorContainer}>
                  <BiInfoCircle />
                  <p>{errors.message}</p>
                </div>}
            </div>
            <button onClick={handleSubmit}>Send</button>
          </form>
        </div>
        <div className={styles.container_socialNetwork}>
          <div data-aos="fade-down" data-aos-duration={1500} className={styles.heroImage} >
            <img data-aos="zoom-in" data-aos-duration={2000} data-aos-delay={1000} src={astronaut} alt="astronaut-hero" />
          </div>
          <h3 data-aos="fade-right" data-aos-duration={1500} >My social networks</h3>
          <div data-aos="fade-left" data-aos-duration={2000} data-aos-delay={700} data-aos-offset={-400} className={styles.socialNetwork}>
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
