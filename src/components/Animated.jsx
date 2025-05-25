import React from "react";
import { motion } from "framer-motion"; 
import AnimatedNumber from "./ui/Animatednumber";
import { FaRegClock, FaUsers, FaSmile, FaCheckCircle } from "react-icons/fa";

const StatsSection = () => {
  const stats = [
    { value: "5+", label: "Years Experience", icon: <FaRegClock className="text-3xl md:text-4xl text-blue-700 dark:text-orange-400 mb-2 mx-auto" /> },
    { value: "100+", label: "Team Members", icon: <FaUsers className="text-3xl md:text-4xl text-blue-700 dark:text-orange-400 mb-2 mx-auto" /> },
    { value: "1000+", label: "Satisfied Clients", icon: <FaSmile className="text-3xl md:text-4xl text-blue-700 dark:text-orange-400 mb-2 mx-auto" /> }, 
    { value: "500+", label: "Compleate Projects", icon: <FaCheckCircle className="text-3xl md:text-4xl text-blue-700 dark:text-orange-400 mb-2 mx-auto" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-950 py-16 md:py-24 transition-colors duration-300">  
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 dark:text-orange-400 mb-12 text-center tracking-tight font-playfair">
          Our Achievements
        </h2>
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} 
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-xl bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03] border border-gray-200 dark:border-gray-800" 
              variants={itemVariants} 
            >
              <div>{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-playfair font-bold text-[#eec918] mb-3"> 
                <AnimatedNumber value={stat.value} />
              </div>
              <div className="text-base font-playfair text-blue-900 dark:text-gray-200">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default StatsSection;