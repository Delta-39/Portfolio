import styles from "./Skills.module.css"
import SkillsCard from "../../Components/SkillsCard/SkillsCard"

const Skills = () =>{

    const skills = [
        {src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",name:"html-icon"},
        {src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg", name:"css-icon"},
        {src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg", name:"javascript-icon"},
        {src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name:"react-icon"},
        {src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", name:"nodeJs-icon"},
        {src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",name:"espress-icon"},
        {src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg",name:"postgressSql-icon"},
        {src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",name:"git-icon"},
        {src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",name:"github-icon"},
        {src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",name:"figma-icon"}
    ]

    return(
        <div className={styles.skills} id="skills" >
            <div className={styles.skills_title}>
                <h2>Skills & Tools so far...</h2>
            </div>
            <div className={styles.skills_container} >
                {skills.map((skill, index)=>(
                    <SkillsCard key={index} index={index} skillImage={skill.src} name={skill.name} />
                ))}
            </div>
        </div>
    )
}

export default Skills