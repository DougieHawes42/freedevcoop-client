import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import DarkModeToggle from "./components/layout/DarkModeToggle";
import Header from "./components/layout/Header";

import Home from "./components/routes/public/Home";

import "./display/style/style.scss";

const App = () => {
  const [darkmode, setDarkmode] = useState(true);

  return (
    <div className={`app ${darkmode ? "app-darkmode" : "app-lightmode"}`}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <DarkModeToggle
        onClick={() => setDarkmode(!darkmode)}
        darkmode={darkmode}
      />
    </div>
  );
};

export default App;
