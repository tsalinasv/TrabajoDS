import Carousel from 'react-bootstrap/Carousel';
import Pad1 from "./Fotos/Pad1.jpg"
import Pad2 from "./Fotos/Pad2.jpg"
import Pad3 from "./Fotos/Pad3.jpg"
import Pad4 from "./Fotos/Pad4.jpg"

function Slide_Peq_1() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block"
          style={{ height: 500, borderRadius: 25}}
          src={Pad4}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          style={{ height: 500, borderRadius: 25}}
          src={Pad1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          style={{ height: 500, borderRadius: 25}}
          src={Pad2}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          style={{ height: 500, borderRadius: 25}}
          src={Pad3}
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide_Peq_1;