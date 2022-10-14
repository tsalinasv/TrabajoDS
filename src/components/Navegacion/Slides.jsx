import Carousel from 'react-bootstrap/Carousel';
import Primeraslide from "./Fotos/Primeraslide.jpeg";
import Segundaslide from "./Fotos/Segundaslide.jpeg";
import Terceraslide from "./Fotos/Terceraslide.jpeg";

function Slide_grande() {
  return (
    <Carousel variant = "dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: 700 }}
          src= {Primeraslide}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>¡Bienvenid@s a El Boliche!</h3>
          <p>Aqui podras encontrar todos nuestros productos</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: 700 }}
          src={Segundaslide}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>¡Bienvenid@s a El Boliche!</h3>
          <p>Aqui podras encontrar todos nuestros productos</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: 700 }}
          src={Terceraslide}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>¡Bienvenid@s a El Boliche!</h3>
          <p>Aqui podras encontrar todos nuestros productos</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide_grande;