import React from "react";
import {Card} from 'react-bootstrap'

function Blocks() {

    return(
        <>
        <div>
        <div class="cards__heading">
          <h3>Content Blocks</h3>
        </div>
</div>
<div>
<>
  <Card>
    <Card.Img variant="top" src="holder.js/100px180" />
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
</div>
<div>
<div class="card-body py-3 p-0">
            <h3 class="block__title mb-lg-4">Content Block Features</h3>
            <div class="row feature-3 text-center">
              <div class="col-md-4 three-grids-columns mt-5">
                <span class="fa fa-laptop icon-fea" aria-hidden="true"></span>
                <a href="#">

                  <h4>Web Design</h4>
                </a>
                <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.</p>

                <a href="#" class="actionbg">Read More</a>
              </div>
              <div class="col-md-4 three-grids-columns mt-5">
                <span class="fa fa-paint-brush icon-fea" aria-hidden="true"></span>
                <a href="#">

                  <h4>Graphic Design</h4>
                </a>
                <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.</p>
                <a href="#" class="actionbg">Read More</a>
              </div>
              <div class="col-md-4 three-grids-columns mt-5">
                <span class="fa fa-signal icon-fea" aria-hidden="true"></span>
                <a href="#">

                  <h4>Web Development</h4>
                </a>
                <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.</p>
                <a href="#" class="actionbg">Read More</a>
              </div>
            </div>
          </div>
</div>
</>

    )
}

export default Blocks