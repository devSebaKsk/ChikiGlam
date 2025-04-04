import React, { useRef } from 'react'
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const items = [
    {
        id: 1,
        title: "Pijamada",
        img: "./Portafolio1.jpg",
        desc: "La mejor pijamada con amigas. Carpa con capacidad para 8 personas, colchonetas alta densidad, colchas, almohadas, decoración encantadora con luces y globos"
    },
    {
        id: 2,
        title: "Noche De Cine",
        img: "./nochecine.jpg",
        desc: "4 hs Pantalla XL proyector 4k, pantalla 100, PuFF super COMODOS"
    },
    {
        id: 3,
        title: "Pijamada + SkinCare",
        img: "./Portafolio2.jpg",
        desc: "La mejor Noche de Pijamada y skincare. Carpa con capacidad para 8 personas, colchonetas alta densidad, colchas y sabanas, almohadas, decoración encantadora con luces y globos. Skincare de 5 simples pasos: Gel de limpieza de Aveno, mascarillas hidratante rostro, mascarilla hidratante labios y muchas Cositas más!!!"
    },
    {
        id: 4,
        title: "Pijamada + Cine",
        img: "./Portafolio3.jpg",
        desc: "Te armamos la mejor pijamada XL y una noche de cine con pantalla 4K. Carpa con capacidad para 8 personas, colchonetas alta densidad colchas, almohadas, decoración encantadora con luces y globos, sumamos la noche de cine."
    },
    {
        id: 5,
        title: "Pijamada + Cine + SkinCare",
        img: "./Portafolio5.jpg",
        desc: " Preparensen para disfrutar de una hermosa pijmada XL con skincare y Noche de cine."
    }
];

const Single = ({ item }) => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        //offset: ["start start","end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);


    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2 style={{ y }}>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>Contratar</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export const Portfolio = () => {

    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", 'start start']
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });
    return (
        <div className='portfolio' ref={ref} >
            <div className="progress">
                <h1>Nuestros Packs</h1>
                <motion.div className="progressBar" style={{ scaleX }}>

                </motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}
