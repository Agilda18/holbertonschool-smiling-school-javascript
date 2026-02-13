import { useEffect, useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import playIcon from "../assets/play.png";
import "./CoursesPage.css";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [topics, setTopics] = useState([]);
  const [sorts, setSorts] = useState([]);
  const [q, setQ] = useState(""), [topic, setTopic] = useState(""), [sort, setSort] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const p = new URLSearchParams();
    if (q) p.set("q", q);
    if (topic) p.set("topic", topic);
    if (sort) p.set("sort", sort);
    setLoading(true);
    fetch(`https://smileschool-api.hbtn.info/courses?${p}`)
      .then(r => r.json())
      .then(d => {
        setCourses(d.courses || []);
        setTopics(d.topics || []);
        setSorts(d.sorts || []);
      })
      .finally(() => setLoading(false));
  }, [q, topic, sort]);

  return (
    <Container className="py-4 courses-page">
      <Row className="mb-4 form-container">
        <Col><Form.Control placeholder="Search" value={q} onChange={e => setQ(e.target.value)} /></Col>
        <Col><Form.Select value={topic} onChange={e => setTopic(e.target.value)}>
          <option value="">Topic</option>{topics.map(t => <option key={t}>{t}</option>)}
        </Form.Select></Col>
        <Col><Form.Select value={sort} onChange={e => setSort(e.target.value)}>
          <option value="">Sort</option>{sorts.map(s => <option key={s}>{s}</option>)}
        </Form.Select></Col>
      </Row>

      <p>{loading ? "Loading..." : `${courses.length} videos`}</p>

      <Row>
        {courses.map((v,i) => (
          <Col key={i} md={3} className="mb-4">
            <Card className="course-card">
              <div className="position-relative thumb-wrap">
                <Card.Img src={v.thumb_url || v.video_poster} className="course-image" />
                <img src={playIcon} alt="" className="play-icon"/>
              </div>
              <Card.Body>
                <Card.Title>{v.title || v.user_quote}</Card.Title>
                <Card.Text>{v.sub_title || v.paragraph}</Card.Text>
                <small className="course-meta">{v.author || v.username} • {v.duration || v.minutes}</small>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
