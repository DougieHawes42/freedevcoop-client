import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

import "./style.scss";

const DarkModeToggle = ({ onClick, darkmode }) => {
  return (
    <motion.div
      className="darkmode-toggle"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {darkmode ? <FiSun /> : <FiMoon />}
    </motion.div>
  );
};

export default DarkModeToggle;
