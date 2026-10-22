import { motion } from "motion/react";

const Circle = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 3 } }}
      viewport={{ amount: 0.5 }}
      style={{
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        backgroundColor: "red",
      }}
    ></motion.div>
  );
};

export default Circle;
