import mesoterapia from "../images/mesoterapia.jpg"
import botox from "../images/botox.jpg"
import perfiladoLabios from "../images/fotoPerfiladoDeLabios.jpg"
import rinomodelacion from "../images/fotoRinomodelacion2.jpg"
import bichectomia from "../images/bichectomia.jpg"
import bruxismo from "../images/bruxismo.jpg"
import sonrisagingival from "../images/sonrisa-gingival.png"

const procedimientos = [
    {
      id: 1,
      title: 'Mesoterapia',
      category: 'Vitaminas',
      img: mesoterapia,
      desc: `multiples principios activos mantienen tu piel linda e hidratada `,
    },
    {
      id: 2,
      title: 'Tercio Superior',
      category: 'Botox',
      img: botox,
      desc: `El Botox, es usado en el tercio superior(entrecejo, patas de gallo y frontal), de manera preventiva
      para relajar la musculatura de esta area `,
    },
    {
      id: 3,
      title: 'Bruxismo',
      category: 'Botox',
      img: bruxismo,
      desc: `Se utiliza botox para relajar la musculadura de la mandibula y asi evitar la friccion de los dientes `,
    },
    {
      id: 4,
      title: 'Sonrisa gingival',
      category: 'Botox',
      img: sonrisagingival,
      desc: `Se utiliza botox para relajar la musculadura de la mandibula y asi evitar la friccion de los dientes `,
    },
    {
      id: 5,
      title: 'Perfilado de Labios',
      category: 'Acido Hialuronico',
      img: perfiladoLabios,
      desc: `Se utiliza ácido hialuronico para darle hidratación, volumen y simetría 
      a tus labios, ayudando tambien con las arrugaa peribucales   `,
    },
    {
      id: 6,
      title: 'Rinomodelación',
      category: 'Acido Hialuronico',
      img: rinomodelacion,
      desc: `Es un procedimiento que se realiza con ácido hialuronico, mejorando tu perfil
      de manera no quirurgica y con anestesia local, mejorendo la punta nasal y rectificando el dorso `,
    },
    {
      id: 7,
      title: 'Bichectomia',
      category: 'Quirurgico',
      img: bichectomia,
      desc: `Es un procedimiento Quirúrgico donde se extraen las bolas de bichart `,
    },
  ];

  export default procedimientos;