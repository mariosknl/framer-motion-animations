import { motion } from "framer-motion";

const boxVariant = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

const listVariant = {
  hidden: {
    x: "-10vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

function Box3() {
  return (
    <div className="box-container">
      <motion.div
        className="box"
        variants={boxVariant}
        animate="visible"
        initial="hidden"
      >
        {[1, 2, 3].map((box) => {
          return (
            <motion.li variants={listVariant} className="boxItem"></motion.li>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Box3;
