import Nav from "../../Components/Nav/Nav"
import heroImage from "../../assets/Daco_49264431.png"
import styles from "./Home.module.css"

const Home = () =>{
    return(
        <div>
            <Nav/>
            <div className={styles.container}>
                <div className={styles.container_left}>
                    <div className={styles.container_left_intro}>
                        <h3>Hi, my name is Martin.</h3>
                        <h1>I’m a fullstack web developer</h1>
                        <h3>I create websites carefully, focusing on both functionality and aesthetics.</h3>
                    </div>
                    <div className={styles.container_left_buttons}>
                        <button>Resume</button>
                        <button>Contact with Me</button>
                    </div>
                </div>
                <div className={styles.container_right}>
                    <div className={styles.container_right_hero}>
                        <img src={heroImage} alt="hero_image"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home