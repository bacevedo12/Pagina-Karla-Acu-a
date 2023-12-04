import botox from '../images/fotoBotox2.jpg'
import rinomodelacion from '../images/rinomodelacion2.jpg'
import perfiladoDeLabios from '../images/perfiladoDeLabios.jpg'
import mesoterapia from '../images/fotoMesoterapia.jpg'
import './Inicio.css'
 
const ControlledCarousel = () => {
    return (

  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner justify-content-center p-5 ">
      <div className="divFoto carousel-item active">
        <img src={botox} className= " imagenCarousel col-6 d-block w-100" alt="..."/>
        <div className="divLetras">
            <h1 className="textoCarousel fs-1 fw-bold">Botox</h1>
            {/* <h4 className='textoCarousel2 fw-bold fs-2'>Usado en el tercio superior de manera preventiva para relajar la musculatura de entrecejo, patas de gallo y frontal </h4> */}
         </div>
      </div>
      <div className="carousel-item">
        <img src={rinomodelacion} className="imagenCarousel  d-block w-100" alt="..."/>
        <div className="divLetras">
            <h1 className="textoCarousel fw-bold">Rinomodelación</h1>
            {/* <h4 className='textoCarousel2 fw-bold fs-2'>Procedimiento no quirúrgico que se realiza con ácido hialuronico, mejorando significativamente tu perfil</h4> */}
         </div>
      </div>
      <div className="carousel-item">
        <img src={perfiladoDeLabios} className="imagenCarousel d-block w-100" alt="..."/>
        <div className="divLetras">
            <h1 className="textoCarousel fw-bold">Perfilado de Labios</h1>
            <br></br>
            {/* <h4 className='textoCarousel2 fw-bold fs-2'>Tratamiento realizado con ácido hialuronico, para lograr mayor volumen, simetría e hidratación de tus labios</h4> */}
         </div>
         
      </div>
      <div className="carousel-item">
        <img src={mesoterapia} className="imagenCarousel  d-block w-100" alt="..."/>
        <div className="divLetras">
            <h1 className="textoCarousel fw-bold">Mesoterapia</h1>
            <br></br>
            {/* <h4 className='textoCarousel2 fw-bold fs-2'>Tratamiento realizado con ácido hialuronico, para lograr mayor volumen, simetría e hidratación de tus labios</h4> */}
         </div>
         
      </div>
      {/* <div className="carousel-item">
        <img src={chupeJaiba} className="imag-responsive center-block" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={locos} className="imag-responsive center-block" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={camaronesPilpil} className="imag-responsive center-block" alt="..."/>
      </div> */}
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon text-dark" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
    );
  }
  
  export default ControlledCarousel;