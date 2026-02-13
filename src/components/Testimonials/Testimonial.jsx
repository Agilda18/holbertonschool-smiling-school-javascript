import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import goni from "../../assets/profile_5.jpg";
import arrowLeft from "../../assets/arrow_white_left.png";
import arrowRight from "../../assets/arrow_white_right.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const Testimonial = () => {
    const [quotes, setQuotes] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadData() {
            try {
                const response = await fetch("https://smileschool-api.hbtn.info/quotes");
                if (!response.ok) {
                    throw new Error("Failed to load testimonials");
                }
                const data = await response.json();
                setQuotes(Array.isArray(data) ? data : []);
                setError("");
            } catch {
                setError("We can not load data for the moment");
            }
        }

        loadData();
    }, []);

    if (error) {
        return <p className="text-center text-white py-4">{error}</p>;
    }

    if (!quotes.length) {
        return <p className="text-center text-white py-4">Loading test</p>;
    }

    const currentSlide = quotes[currentIndex];

    const previous = () => {
        setCurrentIndex((prevState) => {
            let index = prevState - 1;
            if (index < 0) {
                index = quotes.length - 1;
            }
            return index;
        });
    };

    const next = () => {
        setCurrentIndex((prevState) => {
            let index = prevState + 1;
            if (index >= quotes.length) {
                index = 0;
            }
            return index;
        });
    };

    return (
        <section className="bg-color text-white testimonial-section">
            <Container className="position-relative testimonial-container">
                {quotes.length > 1 && (
                    <Button
                        variant="link"
                        onClick={previous}
                        className="position-absolute top-50 translate-middle-y testimonial-arrow left"
                    >
                        <Image src={arrowLeft} width={30} alt="Previous" />
                    </Button>
                )}

                <Row className="align-items-center justify-content-center g-4">
                    <Col md="auto">
                        <Image
                            src={currentSlide.pic_url || goni}
                            roundedCircle
                            className="testimonial-img"
                            alt={currentSlide.name || "testimonial"}
                        />
                    </Col>
                    <Col md={7}>
                        <p className="fs-5 fw-light">"{currentSlide.text}"</p>
                        <p className="fw-bold mb-1">{currentSlide.name}</p>
                        <p className="fst-italic">{currentSlide.title}</p>
                    </Col>
                </Row>

                {quotes.length > 1 && (
                    <Button
                        variant="link"
                        onClick={next}
                        className="position-absolute top-50 end-0 translate-middle-y testimonial-arrow right"
                    >
                        <Image src={arrowRight} width={30} alt="Next" />
                    </Button>
                )}
            </Container>
        </section>
    );
};

export default Testimonial;
