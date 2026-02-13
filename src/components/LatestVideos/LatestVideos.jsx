import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import playIcon from "../../assets/play.png";
import arrowLeft from "../../assets/arrow_black_left.png";
import arrowRight from "../../assets/arrow_black_right.png";
import "./index.css";

const LatestVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    async function loadLatestVideos() {
      try {
        setLoading(true);
        const response = await fetch("https://smileschool-api.hbtn.info/latest-videos");
        if (!response.ok) {
          throw new Error("Failed to load videos");
        }

        const data = await response.json();
        setVideos(Array.isArray(data) ? data : []);
        setError("");
      } catch {
        setError("Could not load latest videos.");
      } finally {
        setLoading(false);
      }
    }

    loadLatestVideos();
  }, []);

  if (loading) {
    return <div className="container my-5 text-center">Loading latest videos...</div>;
  }

  if (error) {
    return <div className="container my-5 text-center">{error}</div>;
  }

  const cardsPerPage = 4;
  const canSlide = videos.length > cardsPerPage;
  const visibleVideos = canSlide
    ? Array.from({ length: cardsPerPage }, (_, i) => videos[(startIndex + i) % videos.length])
    : videos;

  const previous = () => {
    setStartIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const next = () => {
    setStartIndex((prev) => (prev + 1) % videos.length);
  };

  return (
    <section className="latest-section">
      <div className="container my-5">
        <h2 className="latest-title">
          Latest <span>videos</span>
        </h2>

        <div className="latest-slider">
          {canSlide && (
            <button type="button" className="slider-arrow left" onClick={previous} aria-label="Previous videos">
              <img src={arrowLeft} alt="Previous" />
            </button>
          )}

          <Row className="g-4 flex-grow-1">
            {visibleVideos.map((video, index) => (
              <Col key={`${video.id || "video"}-${index}`} xs={12} sm={6} lg={3}>
                <Card className="tutorial-card">
                  <div className="thumb-wrap">
                    <Card.Img
                      variant="top"
                      src={video.thumb_url || video.video_poster}
                      className="custom-image"
                    />
                    <img src={playIcon} alt="Play" className="play-icon" />
                  </div>
                  <Card.Body>
                    <Card.Title>{video.title || video.user_quote}</Card.Title>
                    <Card.Text>{video.sub_title || video["sub-title"] || video.paragraph}</Card.Text>
                    <div className="user-data">
                      <Card.Img
                        variant="top"
                        src={video.author_pic_url || video.user_image}
                        className="user-image"
                      />
                      <span>{video.author || video.username}</span>
                    </div>
                    <div className="tutorial-footer">
                      <div>
                        {[...Array(5)].map((_, i) => (
                          <span key={i} style={{ color: i < (video.star || 0) ? "#c271ff" : "#d8d8d8", fontSize: "20px" }}>
                            ★
                          </span>
                        ))}
                      </div>
                      <h3>{video.duration || video.minutes}</h3>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {canSlide && (
            <button type="button" className="slider-arrow right" onClick={next} aria-label="Next videos">
              <img src={arrowRight} alt="Next" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestVideos;
