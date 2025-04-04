import React, { useRef } from 'react'
import "./services.scss"
import {motion, useInView} from "framer-motion"

const variants = {
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        y:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    }
}

export const Services = () => {

    const ref = useRef()
    const isInView = useInView(ref, {margin:"-100px"})

  return (
    <motion.div className='services' variants={variants} initial="initial" ref={ref} animate={ window.innerWidth<= 900 ? "animate" : isInView && "animate"} >
        <motion.div className="textContainer">
            <p>Creamos la mejor experiencia
                <br/>de pijamadas
            </p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src='/carpa.jpg' alt=''/>
                <h1>Ideas <motion.b whileHover={{color:"#9a20f7"}} >Unicas</motion.b></h1>
            </div>
            <div className="title">
                <h1><motion.b whileHover={{color:"#9a20f7"}}>Para tu </motion.b> Pijamada</h1>
                <button>Que Ofrecemos?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background:"lemonchiffon", color:"black"}}>
                <h2>Carpa XL</h2>
                <p>Nuestra espaciosa carpa tienen capacidad para 8 niñas y están equipada con colchonetas de alta densidad para un descanso placentero. ¡La comodidad y la diversión van de la mano!</p>
                <button>Pedir Info!</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lemonchiffon", color:"black"}}>
                <h2>Proyector 4K</h2>
                <p>Noche de cine al aire libre con una selección de películas que las niñas elijan (y cuenten con la autorización del adulto responsable). Proyector 4K de última generación. Pantalla gigante de 100 pulgadas.</p>
                <button>Pedir Info!</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lemonchiffon", color:"black"}}>
                <h2>SkinCare</h2>
                <p>⁠Set de Skincare de lujo Cada niña recibirá un set de skincare personalizado, diseñado especialmente para su edad. ¡Cinco sencillos pasos para una piel radiante y una experiencia relajante!</p>
                <button>Pedir Info!</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lemonchiffon", color:"black"}}>
                <h2>Decoración Unica</h2>
                <p>Cada evento es unico y siempre tratamos de dar una decoracion diferente para cada evento. Tenemos una amplia gama de colores y tipos de globos para decorar.</p>
                <button>Pedir Info!</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}
