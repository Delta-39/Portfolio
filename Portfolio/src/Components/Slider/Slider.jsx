import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from '../../assets/Projects/Desktop/rodarRent-Desktop.png'
import image2 from '../../assets/Projects/Desktop/countries-app.png'
import styles from './Slider.module.css'

const ProjectSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptativeHeight:true,
  };

  return (
    <div className={styles.carouselContainer} >
      <Slider {...settings}>
            <div className={styles.imageContainer} >
                <img src={image} alt="" />
                <div className={styles.title} >
                  <h2>RodarRent</h2>
                  <p>Fullstack Rental app</p>
                </div>
            </div>
            <div className={styles.imageContainer} >
                <img src={image2} alt="" />
                <div className={styles.title} >
                  <h2>Countries App</h2>
                  <p>Fullstack App about Countries</p>
                </div>
            </div>
      </Slider>
    </div>
  );
};

export default ProjectSlider;
