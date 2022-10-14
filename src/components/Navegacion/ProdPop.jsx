import React from 'react'
import Boton from '../Navegacion/Boton';
import Slide_Peq_1 from '../Navegacion/Slide_1';
import Slide_Peq_2 from '../Navegacion/Slide_2';
import Slide_Peq_3 from '../Navegacion/Slide_3';

function ProdPop() {
  return (
    <div>
        <hr/>
        <h1 style={{textAlign: "center"}}>PRODUCTOS POPULARES</h1>
        <hr/>
        <div className="d-flex">
        <div className="p-2" style={{width: "33%"}}>
            <Slide_Peq_1/>
            <hr/>
            <h3 style={{textAlign: "center"}}>Pétalos Desmaquillantes</h3>
            <p style={{textAlign: "center"}}>Pack de 3 pétalos reutilizables desmaquillantes</p>
            <p style={{textAlign: "center"}}>Colores: Burdeo/Celeste/Mostaza</p>
            <p style={{textAlign: "center"}}>Precio: $7.500</p>
            <div class="col-md-12 text-center"><Boton/></div>
        </div>
        <div className="p-2" style={{width: "33%"}}>
            <Slide_Peq_2/>
            <hr/>
            <h3 style={{textAlign: "center"}}>Carcasas IPhone</h3>
            <p style={{textAlign: "center"}}>Carcasa transparente con logotipo :) o completamente transparente</p>
            <p style={{textAlign: "center"}}>Modelos: IPhone 7/8/SE/Xr/Xs/X/11/12</p>
            <p style={{textAlign: "center"}}>Precios: $4.000/$5.000</p>
            <div class="col-md-12 text-center"><Boton/></div>
        </div>
        <div className="p-2" style={{width: "33%"}}>
            <Slide_Peq_3/>
            <hr/>
            <h3 style={{textAlign: "center"}}>Anteojos</h3>
            <p style={{textAlign: "center"}}>Anteojos de sol cuadrados o circulares con vidrio oscuro</p>
            <p style={{textAlign: "center"}}>Marco: Negro</p>
            <p style={{textAlign: "center"}}>Precios: $8.000/$9.000</p>
            <div class="col-md-12 text-center"><Boton/></div>
        </div>
        </div>
        <hr/>
    </div>
  )
}
export default ProdPop
