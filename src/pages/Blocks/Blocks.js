import React from "react";
import {Card, Container, CardGroup} from 'react-bootstrap'

function Blocks() {

    return(
        <Container>
        <>
        <Card body>Content Blocks</Card>
</>
<>
<h3>Content Block Features</h3>
  <Card>
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
  <Card>
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src="holder.js/100px180" />
  </Card>
</>
<>
<CardGroup>
  <Card>
    <Card.Body>
      <Card.Title>Web Design</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Graphic Design</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Web Development</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>

  </Card>
</CardGroup>
</>

</Container>


    )
}

export default Blocks