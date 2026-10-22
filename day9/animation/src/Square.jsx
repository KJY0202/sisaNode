import { motion } from "motion/react";

const Square = ({ bg }) => {
  return (
    <div>
      <motion.div
        initial={{ scale: 0 }}
        whileTap={{ scale: 2 }}
        animate={{ scale: 1, rotate: 540, transition: { duration: 2 } }}
        onHoverStart={() => console.log("빙글빙글")}
        style={{
          backgroundColor: bg,
          width: "100px",
          height: "100px",
          borderRadius: "12px",
        }}
      ></motion.div>
      <div></div>
    </div>
  );
};

export default Square;
