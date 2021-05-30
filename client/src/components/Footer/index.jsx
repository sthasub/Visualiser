import react from "react";
import "./style.css";
import {useLocation} from "react-router-dom";
const Footer = () => {
    const location = useLocation();
  const getCurrentYear = () => {
    const date = new Date(Date.now());
    return date.getFullYear().toString();
  };

  return (
    <div className={location.pathname === "/login"? "getmargin":""}>
      <br />
      <footer className="bg-primary">
        Copyright &copy; {getCurrentYear()}
      </footer>
    </div>
  );
};

export default Footer;
