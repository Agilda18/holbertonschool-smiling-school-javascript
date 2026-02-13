import { Container, Row, Col, Button, Image } from "react-bootstrap";
import smile from "../../assets/smile_on.png"; 
import "./FreeMembership.css";


const FreeMembership = () => {
    return (
        <Container fluid className="membership text-center py-5 px-5">
            <h1 className=" text-color mb-5">
                <span >Free</span> membership
            </h1>

            <Row className="justify-content-center g-4">
                <Col md={3}>
                    <div className="membership-item p-3">
                        <Image  src={smile}  alt="membership"  className="membership-icon mb-3"   width={45} height={40}/>
                        <h2 className="text-h2" >Lorem Ipsum 1</h2>
                        <p className="text-p">Lorem ipsum dolor sit amet,<br />consectetur adipisicing.</p>
                    </div>
                </Col>

                <Col md={3}>
                    <div className="membership-item p-3">
                        <Image src={smile} alt="membership"  className="membership-icon mb-3" width={45} height={40} />
                        <h2 className="text-h2" >Lorem Ipsum 1</h2>
                        <p className="text-p">Lorem ipsum dolor sit amet,<br />consectetur adipisicing.</p>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="membership-item p-3">
                        <Image  src={smile} alt="membership" className="membership-icon mb-3"  width={45} height={40} />
                        <h2 className="text-h2" >Lorem Ipsum 1</h2>
                        <p className="text-p">Lorem ipsum dolor sit amet,<br />consectetur adipisicing.</p>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="membership-item p-3">
                        <Image src={smile} alt="membership" className="membership-icon mb-3" width={45}height={40} />
                        <h2 className="text-h2" >Lorem Ipsum 1</h2>
                        <p className="text-p">Lorem ipsum dolor sit amet,<br />consectetur adipisicing.</p>
                    </div>
                </Col>
            </Row>

            <Button className=" bt-edit mt-5 px-4 py-2">
                REGISTER FREE
            </Button>
        </Container>
    );
};

export default FreeMembership;
