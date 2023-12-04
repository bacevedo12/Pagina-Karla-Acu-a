import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import React from "react";
import './tratamientos.css';



const Tratamientos = ({items}) =>{
    return (
      <div className="row justify-content-center ">
        {items.map((items, key)=>{       
        const {title, img, desc} = items;
        
        return (
            <Card key={key} className="col-xs-12 col-lg-3 m-3" style={{ width: '18rem' }} >
              <Card.Img className='img_tratamiento' variant="top" src={img} alt={title}  />
              <Card.Body className='cardTratamientos'>
                <Card.Title className='titulo'><h3>{title}</h3></Card.Title>
                <Card.Text className='desc'>
                  {desc} <br/>
                </Card.Text>
              </Card.Body>
              <button className=" botonVer btn-blak m-5">Ver más</button>
            </Card>
        );
      })}
    </div>
    );
};

export default Tratamientos