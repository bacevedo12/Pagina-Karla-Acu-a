import "./Contacto.css"
import fotoContacto from  "../images/fotoKarla.jpg";


const Contacto = () => {
    return (
        <section className="row formulario" id="Contacto">
           <div className=" divFoto col-lg-6 col-sm-6 mb-5 mt-5  me-4 ">
         <img alt=""src={fotoContacto} className="fotoCirugia img-fluid"/>
        </div>    
        <div className="contacto col-lg-4 col-sm-6 ">
        <form action="https://formsubmit.co/bacevedo85@hotmail.com" method="POST" className=" text-white text- "> 
        
          
        
        <div className="  border-2 contornoFormulario mt-5 mb-2">  
            <h1 className="tituloContacto  p-4 fs-1 fw-bold">CONTACTO</h1>
            <div>
            <input className="nombre rounded border border-dark border-2 p-2 mt-3" type="text" id="nombre" name="nombre" placeholder="Nombre" />
            </div>
            <br/>
            <div>
            <input  className="rounded border border-dark border-2 p-2 mt-3" type="text" id="apellido" name="apellido" placeholder="Apellido"/>
            </div>
            <div>
            <br/>
            <input className="rounded border border-dark border-2  p-2 mt-3" type="email" id="email" name="email" placeholder="Mail"/>
            </div>
            <div>
            <br/>
            <input className="rounded border border-dark border-2 p-2 mt-3" type="text" id="celular" name="celular" placeholder="Celular (+569)"/>
            </div>
            <div>
            <br/>
            <textarea className="mensaje rounded border border-dark border-2 p-4 mt-4 mb-4" class=" mensaje" type="text" id="mensaje" name="mensaje" placeholder="Escribeme tu mensaje"
            ></textarea>
            </div>
    
            <div>
            <button type="submit" className="btnContacto btn-lg m-4 mb-5" id="boton" name="boton" >Enviar </button>
            </div>
            </div>    
        </form>
        </div> 
       
    </section>
    )
}

export default Contacto