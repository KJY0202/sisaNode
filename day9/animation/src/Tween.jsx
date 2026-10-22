import { motion } from "motion/react";

const Tween = () => {
  return (
    <motion.div
      style={{
        width: "300px",
        height: "300px",
        backgroundColor: "skyblue",
        borderRadius: "12px",
      }}
      animate={{ x: 200 }}
      // 몇 초 동안, 어떤 곡선으로 움직일지 정함
      //transition={{ type: "tween", duration: 1, ease: [0.01, 0.99, 1, 0] }}
      transition={{ type: "spring", sriffness: 300, damping: 10, mass: 1 }}
    ></motion.div>
  );
};

export default Tween;
