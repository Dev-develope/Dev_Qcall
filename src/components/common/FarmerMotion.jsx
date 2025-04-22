// src/components/common/FarmerMotion.jsx
'use client';
import { motion } from "framer-motion";

const FarmerMotion = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};


const FarmerMotionCard = ({ children, direction = 'left' }) => {
    const xValue = direction === 'left' ? -50 : 50;
  
    return (
      <motion.div
        initial={{ opacity: 0, x: xValue }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    );
  };


export  {FarmerMotion,FarmerMotionCard};
