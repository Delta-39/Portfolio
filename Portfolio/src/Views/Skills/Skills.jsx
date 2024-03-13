import styles from "./Skills.module.css"
import SkillsCard from "../../Components/SkillsCard/SkillsCard"

const Skills = () =>{

    const skills = [
        {src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",name:"html-icon", title:"HTML" },
        {src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg", name:"css-icon", title:"CSS" },
        {src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg", name:"javascript-icon", title:"Javascript" },
        {src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name:"react-icon", title:"React" },
        {src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", name:"nodeJs-icon" ,title:"Node.js" },
        {src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",name:"express-icon", title:"Express" },
        {src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg",name:"postgressSql-icon", title:"PostgreSQL" },
        {src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",name:"git-icon", title:"Git" },
        {src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",name:"github-icon", title:"Github" },
        {src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",name:"figma-icon",title:"AWS"},
    ]

    return(
        <div className={styles.skills} id="skills" >
            <div className={styles.skills_title}>
                <h2 data-aos="fade-up" data-aos-duration={1000} >Skills & Tools so far...</h2>
            </div>
            <div className={styles.skills_container} >
                {skills.map((skill, index)=>(
                    <SkillsCard index={index} key={index} skillImage={skill.src} title={skill.title} name={skill.name} />
                ))}
            </div>
        </div>
    )
}

export default Skills