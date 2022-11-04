import React from 'react'
import { NavLink } from 'react-bootstrap';
import FF from "./Fotos/FF.jpg";
import MR from "./Fotos/MR.jpg";
import Salud from "./Fotos/Salud.jpg";
import Salud2 from "./Fotos/Salud2.png";
import pymes from "./Fotos/pymes.jpg";
import Pyme1 from "./Fotos/Pyme1.jpg";

function Extra() {
  return (
    <div>
        <div className='container'>
            <h1 id="Noticias" className="d-flex align-items-center justify-content-center" style={{fontWeight: 300, fontSize:43, marginTop:100, marginBottom:100}}>Blog Moda, Belleza y Emprendimiento</h1>
            <h2 className="d-flex align-items-center justify-content-start" style={{fontWeight:500, marginBottom:50, marginTop:50}}>Nuevas Noticias de Interés:</h2>
            <div className='row'>
                <div className='col-md-7 d-flex align-items-center justify-content-start'>
                    <div className='row'>
                        <h3 style={{fontWeight: 300, fontSize:35, marginBottom:50}}>Fast Fashion: El corazón de la contaminación textil</h3>
                        <p align="justify" style={{fontWeight: 500, fontSize:19, color:"grey"}}>
                            Se le llama moda rápida o fast fashion al modelo de negocios que consiste en la producción masiva de prendas “desechables”, que genera un grave problema de contaminación. 
                            Por ello, recientemente se anunció la incorporación de estos residuos en la ley de Reciclaje y Responsabilidad Extendida del Productor (REP). Sobre esta situación se refirieron 
                            varios actores de esta cadena, Beatriz O`Brien, socióloga especializada en sustentabilidad textil y coordinadora nacional de la fundación internacional Fashion Revolution; 
                            Guillermo González, jefe de la Oficina de Economía Circular del Ministerio del Medio Ambiente (MMA); Fernanda Kluever, gerenta de sostenibilidad de Tiendas Paris e Isidora Azolas 
                            y Sofía Lillo, fundadoras de Pagana. La ropa ha acompañado a la humanidad a lo largo de toda su historia, como un reflejo de una identidad, cultura, forma de pensar y de sentir ... 
                            La ropa evoluciona junto a las distintas generaciones, y para esta época, marcada por el cambio climático, los movimientos sociales y la información, se necesita una nueva tendencia ... 
                        </p>
                    </div>   
                </div>
                <div className='col-md-5 d-flex align-items-center justify-content-center'>
                    <img src={FF} style={{borderRadius:25, marginTop:50, marginBottom:50}} height="250"/>
                </div>
            </div>
            <NavLink href="https://codexverde.cl/fast-fashion-el-corazon-de-la-contaminacion-textil/" className='d-flex align-items-center justify-content-center' style={{color:"#a65460", fontWeight:600, marginBottom:50}}>https://codexverde.cl/fast-fashion-el-corazon-de-la-contaminacion-textil/</NavLink>
            <div className='row'>
                <div className='col-md-7 d-flex align-items-center justify-content-start'>
                    <div className='row'>
                        <h3 style={{fontWeight: 300, fontSize:35, marginBottom:50}}>La moda ‘retro’ vuelve para evitar el acoso a las mujeres, según un diario mexicano</h3>
                        <p align="justify" style={{fontWeight: 500, fontSize:19, color:"grey"}}>
                        El suplemento de moda del diario mexicano Reforma ha suscitado varias críticas por su artículo principal publicado este fin de semana. “El contexto de agresión o violencia contra las mujeres 
                        llevó a las grandes firmas a apostar por prendas sobrias pero de ninguna manera aburridas o sin personalidad”, se lee en el llamado en portada de la edición de este sábado. Usuarios en Twitter 
                        y Facebook retomaron la publicación acompañándola de críticas por el enfoque de esta casa editorial. Un par de fotografías en Facebook del ejemplar impreso se han compartido más de 850 veces 
                        en las primeras 48 horas tras su publicación. El artículo que se presenta en la portada del suplemento fue escrito por Fernando Toledo y se titula “Discreto Glamour”. En el subtitular, el autor 
                        hace referencia al movimiento #MeeToo y dice que a raíz de ellos varias firmas de alta costura están optando por atuendos discretos y que no permiten que se muestre mucha piel. “Los temas de conciencia 
                        de género y acoso sexual, puestos en el ojo público por distintas iniciativas reivindicatorias, han derivado en que algunas firmas fashion dejen de lado los diseños sensuales”, se indica al inicio del artículo ...
                        </p>
                    </div>   
                </div>
                <div className='col-md-5 d-flex align-items-center justify-content-center'>
                    <img src={MR} style={{borderRadius:25, marginTop:50, marginBottom:50}} height="250"/>
                </div>
            </div>
            <NavLink href="https://verne.elpais.com/verne/2018/09/10/mexico/1536613366_326422.html" className='d-flex align-items-center justify-content-center' style={{color:"#a65460", fontWeight:600, marginBottom:50}}>https://verne.elpais.com/verne/2018/09/10/mexico/1536613366_326422.html</NavLink>
            <h2 className='d-flex align-items-center justify-content-end' style={{fontWeight:500, marginBottom:50, marginTop:100}}>Tu Salud Primero:</h2>
            <div className='row'>
                <div className='col-md-5 d-flex align-items-center justify-content-center'>
                    <div className='row'>
                        <img src={Salud} style={{borderRadius:25, marginTop:50}} height="250"/>
                        <img src={Salud2} style={{borderRadius:25, marginTop:50, marginBottom:50}} height="350"/>
                    </div>
                </div>
                <div className='col-md-7 d-flex align-items-center justify-content-end'>
                    <div className='row'>
                        <h3 style={{fontWeight: 300, fontSize:35, marginBottom:50}}>La moda ‘retro’ vuelve para evitar el acoso a las mujeres, según un diario mexicano</h3>
                        <p align="justify" style={{fontWeight: 500, fontSize:19, color:"grey"}}>
                        Es grave la brecha existente en nuestro país entre las altas prevalencias de trastornos mentales entre la población —al alza durante la pandemia de COVID-19— y el escaso presupuesto público destinado a su 
                        tratamiento y prevención. Frente a la proximidad de las elecciones presidenciales «y la oportunidad que brindan los cambios para identificar necesidades, repensar prioridades y definir posibles líneas de acción»
                        , lo/as especialistas de esta columna para CIPER revisan la evidencia disponible al respecto hoy en Chile y sugieren líneas de mejora. Los trastornos mentales en Chile arrojan cifras alarmantes. Diversos estudios 
                        muestran altas estadísticas al respecto entre la población, con la ansiedad y depresión como las de mayor índice, así como cifras considerables para consumo de alcohol y drogas. Estudios nacionales entre niños y 
                        adolescentes (2017) señalan una prevalencia de trastornos mentales del 38% (cuatro de cada diez). La violencia intrafamiliar ha sido considerada una de las principales fuentes de trastornos mentales, y de acuerdo 
                        a cifras entregadas por UNICEF, un 71% de los niños, niñas y adolescentes (NNA) chilenos recibe algún tipo de violencia ejercida por alguno de sus cuidadores primarios. La evidencia muestra que los NNA que experimentan 
                        o son testigos de violencia, malos tratos o negligencia tienen dificultades para lograr los hitos del desarrollo esperados según su edad, así como un mayor riesgo de presentar trastornos conductuales, estrés postraumático, 
                        ansiedad y depresión. Lo anterior a partir del impacto negativo de la adversidad y el trauma en la capacidad de regulación emocional, en las relaciones interpersonales, la memoria y la tolerancia al estrés ...
                        </p>
                    </div>   
                </div>
            </div>
            <NavLink href="https://www.ciperchile.cl/2021/11/08/salud-mental-en-chile-urgencias-desafios-y-silencios/" className='d-flex align-items-center justify-content-center' style={{color:"#a65460", fontWeight:600, marginBottom:50}}>https://www.ciperchile.cl/2021/11/08/salud-mental-en-chile-urgencias-desafios-y-silencios/</NavLink>
            <h2 className="d-flex align-items-center justify-content-center"style={{fontWeight:500, marginBottom:50, marginTop:100}}>El Poder de las "Pymes"</h2>  
            <h3 style={{fontWeight: 300, fontSize:35, marginBottom:50}}>Las pymes son el sostén de la economía</h3>
            <p align="justify" style={{fontWeight: 500, fontSize:19, color:"grey"}}>
            Las pequeñas y medianas empresas son el motor de la economía, es una premisa que se ha repetido por años, pero los números recientes reflejan que no del todo. Es más bien un sistema donde se benefician unos de otros. Las empresas de 
            menor tamaño generan la mayor cantidad de empleo: sí, pero los salarios son más bajos y aportan menos al PIB. De acuerdo con cifras del Ministerio de Economía, en 2019 las pymes aportaron el 17% del Producto Interno Bruto (PIB), mientras 
            que las grandes el 83%. Asimismo, representan 13,1% del total de las ventas del país, en tanto que las grandes casi 87%.
            </p>
            <p align = "justify" style={{fontWeight: 500, fontSize:19, color:"grey"}}>
            En materia de empleo, según cifras de Hermann Consultores, el 53,3% lo entregan las pymes. La remuneración nominal promedio de los trabajadores fue de $574.497 en las microempresas, $725.959 en las pequeñas empresas, $860.843 en las medianas
             empresas y $936.503 en las empresas grandes.
            </p>
            <p align = "justify" style={{fontWeight: 500, fontSize:19, color:"grey"}}>
            El uso de comercio electrónico (compras y ventas) se relaciona con el tamaño de la empresa, siendo mayor en las grandes y disminuyendo a medida que se reduce el tamaño de la firma. El 20% de las microempresas realizó comercio electrónico, 
            en comparación con 37% de las empresas grandes. Otro aspecto que resalta Jorge Hermann, de Hermann Consultores, es que tanto en Chile como en el resto de los países de la Ocde, la productividad del trabajo es mayor en las empresas grandes 
            y medianas que en las empresas pequeñas y micro. “Lo anterior, dado que las primeras son más intensivas en capital frente a las pequeñas, lo que refleja la necesidad de buscar alternativas que permitan a las pymes mayor posibilidad de competir” ...
            </p>
            <NavLink href="https://www.latercera.com/pulso/noticia/las-pymes-son-el-sosten-de-la-economia/SYHT7OR6SVH7DIYQP4OIKP7NGU/" className='d-flex align-items-center justify-content-center' style={{color:"#a65460", fontWeight:600, marginBottom:50}}>https://www.latercera.com/pulso/noticia/las-pymes-son-el-sosten-de-la-economia/SYHT7OR6SVH7DIYQP4OIKP7NGU/</NavLink>
            <div className='row' style={{marginTop:50, marginBottom:50}}>
                <div className='col-md-6 d-flex align-items-center justify-content-center'>
                    <img src={pymes} style={{borderRadius:25, marginBottom:50}} height="300"/>
                </div>
                <div className='col-md-6 d-flex align-items-center justify-content-center'>
                    <img src={Pyme1} style={{borderRadius:25, marginBottom:50}} height="300"/>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Extra;