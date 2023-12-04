import procedimientos from './data.js'
import Tratamientos from "./Tratamientos.js";
import "./nuestrosTratamientos.css";

const vitaminas = procedimientos.filter((element) => element.category === "Vitaminas");
const botox = procedimientos.filter((element) => element.category === "Botox");
const acidoHialuronico = procedimientos.filter((element) => element.category === "Acido Hialuronico");
const quirurgico = procedimientos.filter((element) => element.category === "Quirurgico");

const NuestrosTratamientos = () =>{
    return (
    <div className='nuestrosTratamientos'>
        <h1 className='tituloTratamientos fw-bold pt-5'>Nuestros Tratamiento</h1>
        <hr className='dividerTratamientos'></hr>
            <h1 className='tipoTratamientos fw-bold'>Botox</h1> 
                <div className='d-flex justify-content-center'>            
                    <Tratamientos  items={botox}/>
                    </div>
                    <hr></hr>

            <h1 className='tipoTratamientos fw-bold'>Ácido Hialuronico </h1>
                <div className='d-flex justify-content-center'>            
                    <Tratamientos  items={acidoHialuronico}/>
                </div>
        
                    <hr></hr>
            <h1 className='tipoTratamientos fw-bold'>Vitaminas</h1>
                <div className='d-flex justify-content-center'>            
                <Tratamientos  items={vitaminas}/>
                </div>
            
         <hr></hr>
            <h1 className='tipoTratamientos fw-bold'>Quirúrgico </h1>
                <div className='d-flex justify-content-center'>            
                     <Tratamientos  items={quirurgico}/>
                 </div>
        
         </div>
        
    
    )
}

export default NuestrosTratamientos