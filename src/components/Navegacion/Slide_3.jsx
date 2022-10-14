import Carousel from 'react-bootstrap/Carousel';
import Lentes1 from "./Fotos/Lentes1.jpeg"
import Lentes2 from "./Fotos/Lentes2.jpeg"

function Slide_Peq_3() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block"
          style={{ height: 500}}
          src={Lentes1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          style={{ height: 500}}
          src={Lentes2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide_Peq_3;