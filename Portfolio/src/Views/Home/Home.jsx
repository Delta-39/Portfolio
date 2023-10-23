import heroImage from "../../assets/Daco_49264431.png"
import styles from "./Home.module.css"
import axios from 'axios'
import { API_URL } from "../../utils/routes"
import { toast } from 'react-toastify'

const Home = () => {
    const handleClick = async () =>{
        try {
            const response = await axios.get(`${API_URL}/pdf`, {
                responseType: 'blob', // Especifica que esperas una respuesta binaria (el archivo PDF)
              });
          
              // Extrae el blob (archivo PDF) de la respuesta
              const pdfBlob = response.data;
          
              // Crea un objeto URL a partir del blob para descargar el archivo
              const url = window.URL.createObjectURL(pdfBlob);
          
              // Crea un enlace en el DOM para descargar el archivo
              const a = document.createElement('a');
              a.style.display = 'none';
              a.href = url;
              a.download = 'Martin Terribile.pdf'; // Nombre del archivo para la descarga
              document.body.appendChild(a);
          
              // Simula un clic en el enlace para iniciar la descarga
              a.click();
          
              // Libera el objeto URL después de la descarga
              window.URL.revokeObjectURL(url);
            toast.success('Congrats! Yhou download the best resume in the world!')

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