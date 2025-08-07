import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { personalInfo,personalInfoa, navigationPaths, services,comp,tran } from "../constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{ max: 45, scale: 1, speed: 450 }}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] min-h-[280px] py-5 px-12 flex flex-col justify-evenly items-center">
         
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Profil</p>
        <h2 className={styles.sectionHeadText}>Étudiant en Bachelor Cybersécurité.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {personalInfo.about}


      </motion.p>




      <motion.div variants={textVariant()}>
       
        <h2 className={styles.sectionHeadText}>Ma formation.</h2>
        <p className={styles.sectionSubText}>ESAIP,école d'ingénieurs.</p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {personalInfoa.about}


      </motion.p>

      <motion.div variants={textVariant()}>
      <br></br>
      <h3 className={styles.sectionHeadText}>Compétences .</h3>
      <p className={styles.sectionSubText}>Techniques</p>
        
      </motion.div>
      
      <div className="mt-20 flex flex-wrap gap-10">
    
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>




      <motion.div variants={textVariant()}>
      <br></br>
   
      <p className={styles.sectionSubText}>Comportementales</p>
        
      </motion.div>
      
      <div className="mt-20 flex flex-wrap gap-10">
    
        {comp.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>


      <motion.div variants={textVariant()}>
      <br></br>
      
      <p className={styles.sectionSubText}>Transversales</p>
        
      </motion.div>
      
      <div className="mt-20 flex flex-wrap gap-10">
    
        {tran.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

  
    </>
  );
};

export default SectionWrapper(About, navigationPaths.about);
