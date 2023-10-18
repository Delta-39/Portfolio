import imageRodar from '../../assets/Projects/Desktop/rodarRent-Desktop.png'
import imageCountries from "../../assets/Projects/Desktop/countries-app.png"

const projectData = [
    {
        id: 1,
        name: 'RodarRent',
        description: 'A website for a rental car company. Includes the following features: Dark mode, payment gateway (Mercadopago), third party authentication, nodemailer implementation, dashboard for admin and client & more. ',
        tech:["React", "Tailwind", "Express", "PostgreSQL"],
        sliderText:"Fullstack Rental app",
        githubFront:"https://github.com/Delta-39/rodarRent-",
        deploy:"https://rodarrent.vercel.app/",
        imageDesktop: imageRodar
    },
    {
        id: 2,
        name:"Countries App",
        description:"holahola",
        tech:["React","Express","PostgreSQL"],
        sliderText:"Fullstack Countries App",
        githubFront:"https://github.com/Delta-39/CountriesApp-front",
        deploy:"https://countries-app-front-nu.vercel.app/",
        imageDesktop: imageCountries
    }
]

export default projectData