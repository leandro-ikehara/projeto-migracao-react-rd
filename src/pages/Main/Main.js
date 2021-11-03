import React from 'react';
import { Card, Row, Col, Breadcrumb, Container } from 'react-bootstrap'

function Main(props) {
  return (
    <>
    <Container>
    <div>
    <h4>Hi, Leandro! Welcome back</h4>
    </div>
    <div>
      <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </div>
      <div>
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 2 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </div>
      </Container>
    </>
  )
}

export default Main