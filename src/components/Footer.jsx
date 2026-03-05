// import React from 'react'

// const Footer = () => {

//   return (

//     <div className='footer1'>

//       <div className="footer">

//         <div className="top">

//           <p className='w'>Current Region / Language</p>

//           <div className="topp">

//             <i class="fa-sharp fa-solid fa-earth-americas"></i>

//             <div className="oo">

//               <p>International / English</p>

//               <a href="#">Change</a>

//             </div>

//           </div>

//         </div>

//         <div className="center">

//           <div className="left">

//             <p className='w'>Locations & Contacts</p>

//             <p>Do you have any questions?</p>

//             <button className='btn11'>Gey in touch</button>

//           </div>

//           <div className="right">

//             <p className='w'>Social Media</p>

//             <p>Get in touch with us via social media.</p>

//             <div className="icon-div">

//               <div className="icon1">
//                 <i class="fa-brands fa-facebook-f"></i>
//               </div>
              
//               <div className="icon1">
//                 <i class="fa-brands fa-instagram"></i>
//               </div>
              
//               <div className="icon1">
//                 <i class="fa-brands fa-pinterest-p"></i>
//               </div>
              
//               <div className="icon1">
//                 <i class="fa-brands fa-youtube"></i>
//               </div>
              
//               <div className="icon1">
//                 <i class="fa-brands fa-x-twitter"></i>
//               </div>
              
//               <div className="icon1">
//                 <i class="fa-brands fa-linkedin-in"></i>
//               </div>

//             </div>

//           </div>

//         </div>

//         <div className="bottom">

//           <ul>

//             <li className='df'>Company</li>
//             <li>Investor Relations</li>
//             <li>Compliance</li>

//           </ul>

//           <ul>

//             <li className='cc'>Career</li>
//             <li>Career</li>
//             <li>Newsroom & Press</li>

//           </ul>

//           <ul>

//             <li className='cc'>Career</li>
//             <li>Global Partnership Council</li>
//             <li>Information Security</li>

//           </ul>

//         </div>

//         <div className="chiziq"></div>

//         <div className="last-bottom">

//           <p>

//             © 2026 Dr. Ing. h.c. F. Porsche AG. <a href="#">Legal Notice.</a> <a href="#">Privacy Policy.</a> <a href="#">Cookie Policy.</a> <a href="#">Consumption/Emissions.</a> <a href="#">Open Source Software Notice.</a> <a href="#">Whistleblower System.</a> <a href="#">Accessibility.</a>
 
//           </p>

//           <p>

//             * If the values are given as ranges, these do not relate to a single, individual vehicle and do not constitute part of the offer. They are intended solely as a means of comparing different vehicle models and refer to the product portfolio that is available on the German market. Extra features and accessories (attachments, tyre formats etc.) can change relevant vehicle parameters such as weight, rolling resistance and aerodynamics and, in addition to weather and traffic conditions, as well as individual handling, can affect the fuel consumption, energy consumption, CO₂ emissions, range and performance values of a car.

//           </p>

//           <p>

//             ** Important information about the all-electric Porsche models can be found <a href="#">here.</a>

//           </p>

//         </div>
        
//         <div className="porsche">

//           <a className='a' href="https://www.porsche.com/international/">PORSHE</a>

//         </div>

//       </div>

//     </div>

//   )

// }

// export default Footer


import React from 'react';
import { motion } from 'framer-motion'; // Motion import qilindi
import './components.css';

const Footer = () => {
  // Silliq ko'tarilish animatsiyasi
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <div className='footer1'>
      <div className="footer">
        
        {/* 1. TEPADAGI REGION QISMI */}
        <motion.div 
          className="top"
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className='w'>Current Region / Language</p>
          <div className="topp">
            <i className="fa-sharp fa-solid fa-earth-americas"></i>
            <div className="oo">
              <p>International / English</p>
              <a href="#">Change</a>
            </div>
          </div>
        </motion.div>

        {/* 2. O'RTADAGI CONTACT VA SOCIAL MEDIA */}
        <div className="center">
          <motion.div 
            className="left"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <p className='w'>Locations & Contacts</p>
            <p>Do you have any questions?</p>
            <button className='btn11'>Get in touch</button>
          </motion.div>

          <motion.div 
            className="right"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <p className='w'>Social Media</p>
            <p>Get in touch with us via social media.</p>
            <div className="icon-div">
              {/* Iconlar alohida-alohida silliq chiqadi */}
              {["facebook-f", "instagram", "pinterest-p", "youtube", "x-twitter", "linkedin-in"].map((icon, index) => (
                <motion.div 
                  key={index} 
                  className="icon1"
                >
                  <i className={`fa-brands fa-${icon}`}></i>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 3. MENU LINKLARI (Ketma-ket chiqadi) */}
        <div className="bottom">
          <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.5 }}>
            <li className='df'>Company</li>
            <li>Investor Relations</li>
            <li>Compliance</li>
          </motion.ul>

          <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.6 }}>
            <li className='cc'>Career</li>
            <li>Career</li>
            <li>Newsroom & Press</li>
          </motion.ul>

          <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.7 }}>
            <li className='cc'>Career</li>
            <li>Global Partnership Council</li>
            <li>Information Security</li>
          </motion.ul>
        </div>

        <div className="chiziq"></div>

        {/* 4. QONUNIY MA'LUMOTLAR VA TEXTLAR */}
        <motion.div 
          className="last-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <p>
            © 2026 Dr. Ing. h.c. F. Porsche AG. <a href="#">Legal Notice.</a> <a href="#">Privacy Policy.</a> <a href="#">Cookie Policy.</a> <a href="#">Consumption/Emissions.</a> <a href="#">Open Source Software Notice.</a> <a href="#">Whistleblower System.</a> <a href="#">Accessibility.</a>
          </p>
          <p>
            * If the values are given as ranges, these do not relate to a single, individual vehicle and do not constitute part of the offer...
          </p>
          <p>
            ** Important information about the all-electric Porsche models can be found <a href="#">here.</a>
          </p>
        </motion.div>
        
        <div className="porsche">
          <motion.a 
            className='a' 
            href="https://www.porsche.com/international/"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            PORSCHE
          </motion.a>
        </div>

      </div>
    </div>
  )
}

export default Footer;