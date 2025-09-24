import { useState } from "react";

import DarkModeToggle from "./components/layout/DarkModeToggle";
import Header from "./components/layout/Header";

import "./display/style/style.scss";

const App = () => {
  const [darkmode, setDarkmode] = useState(true);

  return (
    <div className={`app ${darkmode ? "app-darkmode" : "app-lightmode"}`}>
      <Header />
      <DarkModeToggle
        onClick={() => setDarkmode(!darkmode)}
        darkmode={darkmode}
      />
    </div>
  );
};

export default App;
