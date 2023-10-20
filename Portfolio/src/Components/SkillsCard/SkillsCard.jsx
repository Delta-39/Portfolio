import styles from "./SkillsCard.module.css"

const SkillsCard = ({skillImage,name,title}) => {


    return (
        <div className={styles.card} >
            <img className={styles.cardImage} src={skillImage} alt={name} />
            <div className={styles.cardTitle} >
                <h3>{title}</h3>
            </div>
        </div>
    )
}

export default SkillsCard