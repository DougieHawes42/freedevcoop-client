import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { fadeSpeed1, headerHeight } from "../../display/style/motionVariables";

import "./style.scss";

const Header = () => {
  return (
    <motion.header
      className="header"
      initial={{ y: -headerHeight }}
      animate={{ y: 0 }}
      transition={{ duration: fadeSpeed1 }}
    >
      <Link to="/">
        <div className="header-title-box">
          <h1 className="header-title">FreeDevCoop</h1>
        </div>
      </Link>
    </motion.header>
  );
};

export default Header;
