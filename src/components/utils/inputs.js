import { MdVisibility, MdVisibilityOff } from "react-icons/md";

import "./style.scss";
import { useState } from "react";

export const Input1 = ({ label, value }) => (
  <div className="input input1">
    <label className="input-label input1-label">{label}</label>
    <div className="input-container input1-input-container">
      <input className="input-input input1-input" type="text" value={value} />
    </div>
  </div>
);

export const Input2 = ({ label, password = false, value }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="input input2">
      <label className="input-label input2-label">{label}</label>
      <div className="input-container input2-container">
        <input
          className="input-input input2-input"
          type={!passwordVisible ? "password" : "text"}
          value={value}
        />
        <div
          className="input2-password-toggle"
          onClick={() => setPasswordVisible(!passwordVisible)}
        >
          {passwordVisible ? <MdVisibilityOff /> : <MdVisibility />}
        </div>
      </div>
    </div>
  );
};
