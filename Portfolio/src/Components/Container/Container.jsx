import About from "../../Views/About/About";
import Contact from "../../Views/Contact/Contact";
import Home from "../../Views/Home/Home";
import Projects from "../../Views/Projects/Projects";
import Skills from "../../Views/Skills/Skills";
import Nav from "../Nav/Nav";
import styles from "./Container.module.css";
import { Link } from "react-scroll";
import { BiSolidHome } from "react-icons/bi";
import { useLocation } from "react-router-dom";

function Container() {
  const location = useLocation();

  const isNotHome = location.pathname !== "#home";

  return (
    <div className={styles.container}>
      <Nav />
      <Home />
      <About />
      {isNotHome && (
        <div className={styles.homeButton}>
          <Link to="home" smooth={true} duration={1000}>
            <BiSolidHome />
          </Link>
        </div>
      )}
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Container;
