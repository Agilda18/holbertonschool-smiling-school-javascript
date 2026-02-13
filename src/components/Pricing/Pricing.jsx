import { Container, Row, Col, Button } from "react-bootstrap";
import logo from "../../assets/smile_off.png";
import logoText from "../../assets/logo.png";
import signal from "../../assets/signal.png";
import play from "../../assets/play.png";
import "./pricing.css";

const CheckCircle = () => <span className="check-icon">✓</span>;

const Pricing = () => {
  return (
    <Container className="text-center py-5 mt-5 pricing-component">
      <img src={play} alt="play button" height={60} className="mb-5 d-block mx-auto" />

      <h1 className="text-main">
        What is
        <span className="ms-3">
          <img src={logo} alt="logo" height={40} className="me-3 d-inline-block" />
          <img src={logoText} alt="logo text" height={40} className="d-inline-block" />
        </span>
        ?
      </h1>

      <h2 className="fw-bold fs-1 mt-5 mb-5">Go pro!</h2>

      <Row className="justify-content-center mb-4 txt-plan">
        <Col sm={4}></Col>

        <Col sm={4}>
          <div className="plan">
            <Button className="btn-purple mb-5">BUY 3 MONTHS</Button>
            <h3 className="fw-bold">$89.99</h3>
            <span className="txt-month">$29.99/month</span>
          </div>
        </Col>

        <Col sm={4}>
          <div className="plan">
            <Button className="btn-purple mb-5">BUY 1 YEAR</Button>
            <h3 className="fw-bold">$269.99</h3>
            <span className="txt-month">$24.99/month</span>
          </div>
        </Col>
      </Row>

      <Row className="pricing-row">
        <Col sm={4} className="text-start">
          <span>Unlimited access to all tutorials</span>
        </Col>
        <Col sm={4}><CheckCircle /></Col>
        <Col sm={4}><CheckCircle /></Col>
      </Row>

      <Row className="pricing-row">
        <Col sm={4} className="text-start">
          <span>Access SmileSchool private forum</span>
        </Col>
        <Col sm={4}><CheckCircle /></Col>
        <Col sm={4}><CheckCircle /></Col>
      </Row>

      <Row className="pricing-row">
        <Col sm={4} className="text-start">
          <span>Access Smiles contests & analysis</span>
        </Col>
        <Col sm={4}><CheckCircle /></Col>
        <Col sm={4}><CheckCircle /></Col>
      </Row>

      <Row className="pricing-row">
        <Col sm={4} className="text-start">
          <span>Get a free toothbrush</span>
        </Col>
        <Col sm={4}></Col>
        <Col sm={4}><CheckCircle /></Col>
      </Row>

      <Row className="pricing-row align-items-center signal-row">
        <Col sm={4} className="text-start">
          <img src={signal} alt="Signal" height={40} />
          <span>Exclusive discount on Signal products</span>
        </Col>
        <Col sm={4}></Col>
        <Col sm={4}></Col>
      </Row>
    </Container>
  );
};

export default Pricing;
