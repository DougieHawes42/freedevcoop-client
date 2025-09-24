import { FiSun, FiMoon } from "react-icons/fi";

import "./style.scss";

const DarkModeToggle = ({ onClick, darkmode }) => {
  return (
    <div className="darkmode-toggle" onClick={onClick}>
      {darkmode ? <FiSun /> : <FiMoon />}
    </div>
  );
};

export default DarkModeToggle;
