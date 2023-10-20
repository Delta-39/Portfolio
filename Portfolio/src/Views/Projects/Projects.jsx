import ProjectSlider from "../../Components/Slider/Slider"
import style from './Projects.module.css'

const Projects = () =>{
    return(
        <div className={style.projectContainer} id="projects" >
            <div data-aos="fade-up" data-aos-duration={1000} className={style.projectTitle} >
                <h2 >Projects</h2>
            </div>
            <div className={style.projectSlider} >
                <ProjectSlider/>
            </div>
        </div>
    )
}

export default Projects