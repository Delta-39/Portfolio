import { Link, useParams } from "react-router-dom"
import projectData from "../Projects/projectsData"
import styles from "./ProjectDetail.module.css"
import { BiArrowBack, BiRocket,BiCode } from "react-icons/bi";
import PageTransition from "../../Components/PageTransition/PageTransition";

const ProjectDetail = () => {

    const { id } = useParams()

    const project = projectData.find((project) => project.id === Number(id))


    return (
        <PageTransition>
            <div className={styles.container} >
                <div className={styles.backButtonContainer} >
                    <Link to="/">
                        <button className={styles.detailButtons} >
                            <BiArrowBack/> Back
                        </button>
                    </Link>
                </div>
                <div className={styles.infoContainer} >
                    <div className={styles.infoContainer_img} >
                        <img src={project.imageDesktop} alt={project.name} />
                    </div>
                    <div className={styles.titleDetailContainer}>
                        <div className={styles.detailContainer} >
                            <div className={styles.detailContainer_title} >
                                <h2>{project.name}</h2>
                            </div>
                            <div className={styles.detailContainer_detail} >
                                <h3>Details:</h3>
                                <br />
                                <p>{project.description}</p>
                                <div className={styles.detailContainer_detail_tech}>
                                    <h4>Technologies Used:</h4>
                                    <ul>
                                        {project.tech.map((el, index) => (
                                            <li key={index}>{el}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.projectLinks} >
                            <button className={styles.detailButtons}><a href={project.deploy}>Deploy <BiRocket/></a></button>
                            <button className={styles.detailButtons}><a href={project.githubFront}>Code <BiCode/></a></button>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    )
}

export default ProjectDetail