import Carousel from 'react-bootstrap/Carousel';
import Carcasa1 from "./Fotos/Carcasa1.jpeg"
import Carcasa2 from "./Fotos/Carcasa2.jpeg"

function Slide_Peq_2() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block"
          style={{ height: 500}}
          src={Carcasa1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          style={{ height: 500}}
          src={Carcasa2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide_Peq_2;