import { useEffect, useState } from "react";
import axios from "axios";
import { Alert, Card, Col, Container, Form, Row } from "react-bootstrap";
import "../pages/CoursesPage.css";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("all");


  useEffect(() => {
    async function loadCourses() {
      try {
        const response = await axios.get("https://smileschool-api.hbtn.info/courses");
        setCourses(response.data?.courses || []);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }

    loadCourses();
  }, []);

  const handleChange = (event) => {
    const value = event.target.value.trim().toLowerCase();
    setSearchTerm(value);
  };

  const handleTopicChange = (event) => {
    const value = event.target.value.trim().toLowerCase();
    setSelectedTopic(value);
  };

  const searchedCourses = courses.filter((course) => {
    const title = (course.title || "").toLowerCase();
    const topic = (course.topic || "").toLowerCase();
    const matchesSearch = title.includes(searchTerm.toLowerCase());
    const matchesTopic = selectedTopic === "all" || topic === selectedTopic;

    return matchesSearch && matchesTopic;
  });

  return (
    <main className="courses-page">
      <section className="courses-top">
        <Container>
          <p className="quote-main">
            « Don't cry because it's over.
            <br />
            <span>Smile</span> because it happened. »
          </p>
          <p className="mt-2 text-white-50 mb-0">Dr. Seuss</p>
        </Container>
      </section>

      <section className="form-container">
        <Container>
          <Form>
            <Row className="g-3">
              <Col xs={12} md={4}>
                <Form.Label className="filter-label">KEYWORDS</Form.Label>
                <Form.Control
                  placeholder="Search by keywords"
                  value={searchTerm}
                  onChange={handleChange}
                />
              </Col>
              <Col xs={12} md={4}>
                <Form.Label className="filter-label">TOPIC</Form.Label>
                <Form.Select value={selectedTopic} onChange={handleTopicChange}>
                  <option value="all">All</option>
                  <option value="novice">Novice</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="expert">Expert</option>
                </Form.Select>
              </Col>
              <Col xs={12} md={4}>
                <Form.Label className="filter-label">SORT BY</Form.Label>
                <Form.Select>
                  <option value="most-popular">Most Popular</option>
                  <option value="most-viewd">Most viewed</option>
                  <option value="most-recent">Most recent</option>
                </Form.Select>
              </Col>
            </Row>
          </Form>
        </Container>
      </section>

      <Container className="courses-content">
        <p className="courses-count">{searchedCourses.length} courses loaded</p>
        <Row className="g-4">
          {searchedCourses.map((course, index) => (
            <Col key={course.id ?? index} xs={12} sm={6} lg={3}>
              <Card className="course-card">
                <Card.Img
                  variant="top"
                  src={course.thumb_url || course.author_pic_url}
                  className="course-image"
                />
                <Card.Body>
                  <Card.Title>{course.title || course.author}</Card.Title>
                  <Card.Text>{course.sub_title || "No description available"}</Card.Text>
                  <div className="star">{Array.from({ length: course.star || 0 }).map(() => "★")}</div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {/* <Row>
          {
            searchedCourses.length > 0
              ? searchedCourses.map((course, index) => {
                return (
                  <Col md={3} key={index}>
                    <Card>
                      <Card.Img variant="top" src={course.author_pic_url} />
                      <Card.Body>
                        <Card.Title>{course.author}</Card.Title>
                        <Card.Text>{course.title}</Card.Text>
                        {Array.from({ length: course.star || 0 }).map((_, index) => (
                          <span key={index}>★</span>
                        ))}
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })
              : <Alert variant="danger">No Data</Alert>

          }
        </Row> */}
      </Container>
    </main>
  );
}

export default Courses;
