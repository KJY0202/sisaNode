import { motion } from "motion/react";

const Title = () => {
  return (
    <motion.div
      style={{ height: "100vh", border: "solid 1px red" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 3 } }}
      viewport={{ amount: 0.5 }}
    >
      <h1>특별한 당신에게 딱 맞는 커피를 바나프레소가 완성합니다</h1>
    </motion.div>
  );
};

export default Title;
