import styles from "./SkillsCard.module.css"

const SkillsCard = ({skillImage,name,title,index}) => {

    const dataAosDelay = index * 300

    return (
        <div data-aos="fade-down" data-aos-duration={800} data-aos-delay={dataAosDelay} >
            <div className={styles.card} >
                <img className={styles.cardImage} src={skillImage} alt={name} />
                <div className={styles.cardTitle} >
                    <h3>{title}</h3>
                </div>
            </div>
        </div>
    )
}

export default SkillsCard