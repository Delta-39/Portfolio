import styles from './About.module.css'
import aboutHeroImage from '../../assets/linkedinPorfile.webp'


const About = () => {
    return (
        <div className={styles.about} id="about" >
            <div data-aos="fade-left" data-aos-duration={1000} className={styles.about_image}>
                <img data-aos="zoom-in" data-aos-duration={1200} data-aos-delay={500} src={aboutHeroImage} alt="about-hero-image" />
            </div>
            <div className={styles.about_text}>
                <div className={styles.about_text_title}>
                    <h2>So, who am I?</h2>
                </div>
                <div className={styles.about_text_description}>
                    <p>I am a web developer based in Buenos Aires, Argentina, whose experience as a former officer in the Navy has enriched my approach to technology. The soft skills I acquired, such as leadership, adaptability, and decision-making under pressure, intertwine with my ability to create functional and aesthetically appealing web solutions. My commitment is to leverage this unique combination to deliver exceptional results in every project I undertake.</p>
                </div>
            </div>
        </div>
    )
}

export default About