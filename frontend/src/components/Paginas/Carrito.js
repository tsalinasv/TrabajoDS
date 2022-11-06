import Carro from '../Navegacion/Carro';
import Footer from '../Navegacion/Footer';
import Home from '../Navegacion/Home';
import Barra_nav from '../Navegacion/Nav'

function Carrito() {
  return (
    <div>
        <Barra_nav/>
        <Carro/>
        <Home/>
        <Footer/>
    </div>
  )
}
export default Carrito;
