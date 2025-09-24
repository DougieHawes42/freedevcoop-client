import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./style.scss";

const Header = () => {
  return (
    <motion.header
      className="header"
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
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
