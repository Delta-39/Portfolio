import { Link } from 'react-scroll';
import styles from './Nav.module.css'
import { useState } from 'react'
import { BiMenu, BiX } from "react-icons/bi";

const Nav = () => {

    const [showMenu, setShowMenu] = useState(false)

    const handleClick = () =>{
        setShowMenu((prev)=>!prev)
    } 
    
    const handleLinkClick = () =>{
        setShowMenu(false)
    }

    return (
        <header id="home" className={styles.header} >
            <div className={styles.title} >
                <h1 data-aos="fade-left" data-aos-duration={1000} data-aos-delay={500} data-aos-easing="ease-in-out" >Martin Terribile {'</>'}</h1>
            </div>
            <div className={styles.navContainer} >
                {/*Mobile Menu */}
                <nav className={styles.mobileNav} >
                    {showMenu ? <BiX className={styles.hamburguer} onClick={handleClick} /> : <BiMenu className={styles.hamburguer} onClick={handleClick}/> }
                    <ul className={`${styles.realNavMobile} ${showMenu ? styles.showMenu:''}`} >
                        <li data-aos="fade-down" data-aos-duration={1000} data-aos-delay={300} ><Link className={styles.navLink} onClick={handleLinkClick} to="about" smooth={true} duration={1000}>About</Link></li>
                        <li data-aos="fade-down" data-aos-duration={1000} data-aos-delay={600} ><Link className={styles.navLink} onClick={handleLinkClick} to="skills" smooth={true} duration={1000}>Skills</Link></li>
                        <li data-aos="fade-down" data-aos-duration={1000} data-aos-delay={900} ><Link className={styles.navLink} onClick={handleLinkClick} to="projects" smooth={true} duration={1000}>Projects</Link></li>
                        <li data-aos="fade-down" data-aos-duration={1000} data-aos-delay={1200} ><Link className={styles.navLink} onClick={handleLinkClick} to="contact" smooth={true} duration={1000}>Contact</Link></li>
                    </ul>
                </nav>
                {/*Desktop Menu*/}
                <nav className={styles.desktopNav} >
                    <ul className={styles.realNav} >
                        <li data-aos="fade-down" data-aos-duration={1000} data-aos-delay={300} ><Link className={styles.navLink} to="about" smooth={true} duration={1000}>About</Link></li>
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