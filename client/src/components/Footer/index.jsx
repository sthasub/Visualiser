import react from "react";
import "./style.css";

const Footer = () => {
  const getCurrentYear = () => {
    const date = new Date(Date.now());
    return date.getFullYear().toString();
  };

  return (
    <div>
      <br />
      <footer className="bg-primary">
        Copyright &copy; {getCurrentYear()}
      </footer>
    </div>
  );
};

export default Footer;
