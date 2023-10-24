import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Slider.module.css'
import projectData from "../../Views/Projects/projectsData";
import { Link } from "react-router-dom";
import './Slider.css'

// Define los componentes prevArrow y nextArrow
function CustomPrevArrow(props) {
  const { className,style, onClick } = props;

  return (
    <div
      className={className}
      style={{...style}}
      onClick={onClick}
    />
  );
}


function CustomNextArrow(props) {
  const { className,onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}

const ProjectSlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptativeHeight:true,
    prevArrow: <CustomPrevArrow className="prev-arrow"/>,
    nextArrow: <CustomNextArrow />
  };

  return (
    <div data-aos="zoom-in-up" data-aos-duration={2000} data-aos-delay={400} className={styles.carouselContainer} >
      <Slider {...settings}>
        {projectData.map((project, index) => (
          <div key={index} className={styles.imageContainer} >
            <Link to={`/${project.id}`} >
              <img src={project.imageDesktop} alt={project.name} />
            </Link>
            <div className={styles.title} >
              <h2>{project.name}</h2>
              <p>{project.sliderText}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectSlider;

