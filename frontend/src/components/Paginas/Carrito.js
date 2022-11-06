import Carro from '../Navegacion/Carro';
import Footer from '../Navegacion/Footer';
import Barra_nav from '../Navegacion/Nav'
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Carrito() {
  return (
    <div>
        <ToastContainer/>
        <Barra_nav/>
        <Carro/>
        <Footer/>
    </div>
  )
}
export default Carrito;
