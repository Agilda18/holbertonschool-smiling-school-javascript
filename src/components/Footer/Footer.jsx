import { Container } from 'react-bootstrap';
import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twiter.png";
import instagram from "../../assets/instagram.png";
import "./index.css";

const Footer = () => {
  return (
    <footer className="bg-dark py-5 footer-section">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <img src={logo} alt="logo" height="40" />
          <div className="d-flex gap-3">
            <img src={facebook} alt="facebook" height="24" />
            <img src={twitter} alt="twitter" height="24" />
            <img src={instagram} alt="instagram" height="24" />
          </div>
        </div>
        <p className="text-center footer-copy mt-5 mb-0">
          © SmileSchool 2020
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
