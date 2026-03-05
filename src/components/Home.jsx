import React from 'react';
import { motion } from 'framer-motion'; 
import './components.css';
import porshe from '../assets/porshe.webp';

const Home = () => {
    const globalDelay = 0.6; 

    const contentVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (customDelay) => ({ 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 1.8,
                delay: globalDelay + customDelay,
                ease: [0.16, 1, 0.3, 1] 
            }
        })
    };

    return (
        <div className="box1">
            <motion.div 
                className="navbar"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: globalDelay }}
            >          
                <div className="left">
                    <i className="fa-light fa-bars"></i>
                    <p>Menu</p>
                </div>

                <div className="center">
                    <a className='a' href="https://www.porsche.com/international/">PORSCHE</a> 
                    <img src={porshe} alt="Porsche Logo" />
                </div>

                <div className="right">
                    <i className="fa-light fa-user"></i>
                </div>
            </motion.div>

            <div className="center1">
                <motion.h1 
                    className='h1'
                    custom={0.3} 
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                >
                    The new Cayenne Electric.
                </motion.h1>

                <motion.button 
                    className='sd'
                    custom={1.0}
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: "#fff", 
                        color: "#000",
                        transition: { duration: 0.3 } 
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    Discover more
                </motion.button>
            </div>

            <motion.div 
                className="bottom"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: globalDelay + 1.5 }}
            >
                <p className='ui'>
                    Electric energy consumption combined (model range): 22.4 – 20.4 kWh/100 km, CO₂-emissions combined (model range): 0 g/km
                </p>
            </motion.div>
        </div>
    );
};

export default Home;