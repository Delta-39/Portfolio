import heroImage from "../../assets/Daco_49264431.png"
import styles from "./Home.module.css"
import axios from 'axios'
import { API_URL } from "../../utils/routes"
import { toast } from 'react-toastify'

const Home = () => {
    const handleClick = async () => {
        try {
            const response = await axios.get(`${API_URL}/pdf`, {
                responseType: 'blob',
            });
            const pdfBlob = response.data;
            const url = window.URL.createObjectURL(pdfBlob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'Martin Terribile.pdf';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            toast.success('Thank you for downloading my resume!')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.container_left}>
                    <div data-aos="zoom-in" data-aos-duration={1500} data-aos-delay={500} className={styles.container_left_intro}>
                        <h3>Hi, my name is Martin.</h3>
                        <h1>I’m a fullstack web developer</h1>
                        <h3>I create websites carefully, focusing on both functionality and aesthetics.</h3>
                    </div>
                    <div data-aos="fade-up" data-aos-duration={1000} data-aos-delay={1300} data-aos-offset={-100} className={styles.container_left_buttons}>
                        <button onClick={handleClick} >Resume</button>
                        <button ><a href="https://www.linkedin.com/in/juan-martin-terribile-giles-90a4b1229/">Connect with Me</a></button>
                    </div>
                </div>
                <div className={styles.container_right}>
                    <div data-aos="zoom-in-left" data-aos-duration={1500} data-aos-delay={1300} className={styles.container_right_hero}>
                        <img src={heroImage} alt="hero_image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home