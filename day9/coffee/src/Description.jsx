import { motion } from "motion/react";

const Description = () => {
  return (
    <motion.div
      style={{ height: "100vh", border: "solid 1px red" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 3 } }}
      viewport={{ amount: 0.5 }}
    >
      <h1>개꿀맛 커피집</h1>
    </motion.div>
  );
};

export default Description;
