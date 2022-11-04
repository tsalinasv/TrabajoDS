import React from 'react'
import Boton from '../Navegacion/Boton';
import Slide_Peq_1 from '../Navegacion/Slide_1';
import Slide_Peq_2 from '../Navegacion/Slide_2';
import Slide_Peq_3 from '../Navegacion/Slide_3';
function ProdPop() {
  return (
    <div>
        <hr/>
        <h1 style={{textAlign: "center", fontWeight: 300}}>PRODUCTOS POPULARES</h1>
        <hr/>
        <div className="d-flex">
        <div className="p-2" style={{width: "33%"}}>
            <Slide_Peq_1/>
            <hr/>
            <h3 style={{textAlign: "center", fontWeight:700, color:"black"}}>Pétalos Desmaquillantes</h3>
            <p style={{textAlign: "center", fontWeight:500, color:"grey"}}>Pack de 3 pétalos reutilizables desmaquillantes</p>
            <p style={{textAlign: "center", fontWeight:500, color:"grey"}}>Colores: Burdeo/Celeste/Mostaza</p>
            <p style={{textAlign: "center", fontWeight:500, color:"grey"}}>Precio: $7.500</p>
        </div>
        <div className="p-2" style={{width: "33%"}}>
            <Slide_Peq_2/>
            <hr/>
            <h3 style={{textAlign: "center", fontWeight:700, color:"black"}}>Carcasas IPhone</h3>
            <p style={{textAlign: "center", fontWeight:500, color:"grey"}}>Carcasa transparente con logotipo o completamente transparente</p>
            <p style={{textAlign: "center", fontWeight:500, color:"grey"}}>Modelos: IPhone 7/8/SE/Xr/Xs/X/11/12</p>
            <p style={{textAlign: "center", fontWeight:500, color:"grey"}}>Precios: $4.000/$5.000</p>
        </div>
        <div className="p-2" style={{width: "33%"}}>
            <Slide_Peq_3/>
            <hr/>
            <h3 style={{textAlign: "center", fontWeight:700, color:"black"}}>Anteojos</h3>
            <p style={{textAlign: "center", fontWeight:500, color:"grey"}}>Anteojos de sol cuadrados o circulares con vidrio oscuro</p>
            <p style={{textAlign: "center", fontWeight:500, color:"grey"}}>Marco: Negro</p>
            <p style={{textAlign: "center", fontWeight:500, color:"grey"}}>Precios: $8.000/$9.000</p>
        </div>
        </div>
        <div className="d-flex" style={{marginBottom:30}}>
          <div className="p-2" style={{width: "33%"}}><div class="col-md-12 text-center"><Boton/></div></div>
          <div className="p-2" style={{width: "33%"}}><div class="col-md-12 text-center"><Boton/></div></div>
          <div className="p-2" style={{width: "33%"}}><div class="col-md-12 text-center"><Boton/></div></div>
        </div>
    </div>
  )
}
export default ProdPop
