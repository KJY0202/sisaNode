import { motion } from "motion/react";
import beanImage from "./bean.jpg";

const Bean = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      {[0, 1, 2].map((v) => (
        <motion.img
          key={v}
          src={beanImage}
          alt="커피 원두"
          style={{ width: "100px" }}
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 10,
            delay: v * 0.3,
          }}
          viewport={{ once: true, amount: 0.5 }}
        />
      ))}
    </div>
  );
};

export default Bean;
