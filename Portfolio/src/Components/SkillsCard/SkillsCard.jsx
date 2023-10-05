import styles from "./SkillsCard.module.css"

const SkillsCard = ({skillImage,name,index}) => {


    return (
        <div className={styles.card} >
            <img className={styles.cardImage} src={skillImage} alt={name} />
        </div>
    )
}

export default SkillsCard