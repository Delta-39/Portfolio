import { Link } from 'react-scroll';
import styles from './Nav.module.css'

const Nav = () => {


    return (
        <header className={styles.header} >
            <div className={styles.title} >
                <h1>Martin Terribile {'</>'}</h1>
            </div>
            <div className={styles.navContainer} >
                <nav className={styles.nav} >
                    <ul className={styles.realNav} >
                        <li><Link className={styles.navLink} to="about"smooth={true} duration={500}>About</Link></li>
                        <li><Link className={styles.navLink} to="skills" smooth={true} duration={500}>Skills</Link></li>
                        <li><Link className={styles.navLink} to="projects" smooth={true} duration={500}>Projects</Link></li>
                        <li><Link className={styles.navLink} to="contact" smooth={true} duration={500}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Nav;