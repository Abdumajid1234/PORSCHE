import React from 'react';
import { motion } from 'framer-motion';
import './components.css';

const Section1 = () => {
  // Elementlarning pastdan yuqoriga silliq chiqish animatsiyasi
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <div className='box1 box2 box9'>
      
      <div className="box11">
        <div className="porshe-divs">
          <motion.div className="porshe-div" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}>
            <div className="ll"><p>Porshe GT3 RS</p><i className="fa-light fa-arrow-right"></i></div>
          </motion.div>
          
          <motion.div className="porshe-div" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.5 }}>
            <div className="ll"><p>Taycan</p><i className="fa-light fa-arrow-right"></i></div>
          </motion.div>
          
          <motion.div className="porshe-div" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.8 }}>
            <div className="ll"><p>Porshe 911 Night Edition</p><i className="fa-light fa-arrow-right"></i></div>
          </motion.div>
        </div>

        <motion.div className="divv" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.1 }}>
            <p className='porshe-p'>
              911 Turbo S: Fuel consumption combined (model range): 11.7 – 11.5 l/100 km, CO₂-emissions combined (model range): 266 – 262 g/km | Taycan: Electric energy consumption combined (model range): 19.4 – 16.7 kWh/100 km, CO₂-emissions combined (model range): 0 g/km
            </p>
        </motion.div>
      </div>

      <div className="box22">
        <motion.div className="top" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h1>Your Porsche journey starts now.</h1>
        </motion.div>

        <div className="bottom">
          
          <div className="xx">
            <motion.div className="bottom-div ohio" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="tt"><button>Gasoline</button></div>
              <div className="bb">
                <div className="o"><p>Iconic sports car with rear engine: 2 doors, 2+2 seats.</p><button>Explore</button></div>
                <div className="icon"><i className="fa-light fa-arrow-right"></i></div>
              </div>
            </motion.div>

            <motion.div className="bottom-div rr" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.4 }}>
              <div className="tt"><button>Gasoline</button></div>
              <div className="bb">
                <div className="o"><p>Precise mid-engine sports car: 2 doors, 2 seats.</p></div>
                <div className="icon"><i className="fa-light fa-arrow-right"></i></div>
              </div>
            </motion.div>
          </div>

          <div className="xx">
            <motion.div className="bottom-div" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="tt"><button>Electric</button></div>
              <div className="bb">
                <div className="o"><p>Electric sports car: 4 doors, 4/5 seats.</p></div>
                <div className="icon"><i className="fa-light fa-arrow-right"></i></div>
              </div>
            </motion.div>

            <motion.div className="bottom-div" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.4 }}>
              <div className="tt"><button>Hybrid</button><button>Gasoline</button></div>
              <div className="bb">
                <div className="o"><p>Luxury sedan with a high level of comfort: 4 doors, 4/5 seats.</p></div>
                <div className="icon"><i className="fa-light fa-arrow-right"></i></div>
              </div>
            </motion.div>
          </div>

          <div className="xx">
            <motion.div className="bottom-div" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="tt"><button>Electric</button></div>
              <div className="bb">
                <div className="o"><p>Sporty compact SUV : 4 doors, 5 seats.</p></div>
                <div className="icon"><i className="fa-light fa-arrow-right"></i></div>
              </div>
            </motion.div>

            <motion.div className="bottom-div" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.4 }}>
              <div className="tt"><button>Electric</button><button>Hybrid</button><button>Gasoline</button></div>
              <div className="bb">
                <div className="o"><p>Versatile SUV : 4 doors, up to 5 seats.</p></div>
                <div className="icon"><i className="fa-light fa-arrow-right"></i></div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      <div className="box33">
        <motion.div className="top" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }}>
          <h1>Discover</h1>
        </motion.div>

        <div className="divlar">
          <motion.div className="bola-div" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}>
            <div className="kk"><p>Porsche Experience.</p><i className="fa-light fa-arrow-right"></i></div>
          </motion.div>
          
          <motion.div className="bola-div" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.5 }}>
            <div className="kk"><p>E - Performance — Sustainable mobility</p><i className="fa-light fa-arrow-right"></i></div>
          </motion.div>
          
          <motion.div className="bola-div" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.8 }}>
            <div className="kk"><p>Porshe FInder</p><i className="fa-light fa-arrow-right"></i></div>
          </motion.div>
        </div>
      </div>

    </div>
  );
};

export default Section1;