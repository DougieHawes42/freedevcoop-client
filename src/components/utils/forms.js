import "./style.scss";

export const Form1 = ({ title, content }) => (
  <form className="form form1">
    <h3 className="form-title form1-title">{title}</h3>
    <div className="form-content form1-content">{content}</div>
  </form>
);
