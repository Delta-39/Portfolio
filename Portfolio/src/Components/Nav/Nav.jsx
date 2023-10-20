import { Link } from 'react-scroll';
import styles from './Nav.module.css'

const Nav = () => {

    return (
        <header id="home" className={styles.header} >
            <div className={styles.title} >
                <h1 data-aos="fade-left" data-aos-duration={1000} data-aos-delay={500} data-aos-easing="ease-in-out" >Martin Terribile {'</>'}</h1>
            </div>
            <div className={styles.navContainer} >
                <nav className={styles.nav} >
                    <ul className={styles.realNav} >
                        <li data-aos="fade-down" data-aos-duration={1000} data-aos-delay={300} ><Link className={styles.navLink} to="about"smooth={true} duration={1000}>About</Link></li>
                        <li data-aos="fade-down" data-aos-duration={1000} data-aos-delay={600} ><Link className={styles.navLink} to="skills" smooth={true} duration={1000}>Skills</Link></li>
                        <li data-aos="fade-down" data-aos-duration={1000} data-aos-delay={900} ><Link className={styles.navLink} to="projects" smooth={true} duration={1000}>Projects</Link></li>
                        <li data-aos="fade-down" data-aos-duration={1000} data-aos-delay={1200} ><Link className={styles.navLink} to="contact" smooth={true} duration={1000}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Nav;