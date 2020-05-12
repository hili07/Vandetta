import React, { Fragment } from 'react';

import { Row, Col, CardBody, Card, Button } from 'reactstrap';
import stock1 from './.././assets/img/products/gend.jpg';
import stock2 from './.././assets/img/products/gen.jpg';
import stock3 from './.././assets/img/products/gennn.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Row>
        <Col xl="4" lg="6">
          <Card className="mb-5">
            <img alt="..." className="card-img-top" src={stock1} />
            <CardBody>
              <h4 className="card-title font-weight-bold font-size-lg">
                Amarachi Ndukwe
              </h4>
              <h6>18N01/027</h6>
              <p className="card-text">
              It starts by standing with the students, listening to voices unheard, and recognizing potential where 
              others see despair. It makes communication work for us, not control us. VOTE for me!.
              </p>
              <Button
                tag="a"
                color="primary"
                href="#/"
                onClick={e => e.preventDefault()}>
                VOTE
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col xl="4" lg="6">
          <Card className="mb-5">
            <img alt="..." className="card-img-top" src={stock2} />
            <CardBody>
              <h4 className="card-title font-weight-bold font-size-lg">
                Amanda Osetame
              </h4>
              <h6>16S06/019</h6>
              <p className="card-text">
             
              I stand for accountability, perseverance and resillence. 
              A vote for me is a step towards GREATNESS, let's get one step closer to that a vote at a time.
              </p>
              <Button
                tag="a"
                color="primary"
                href="#/"
                onClick={e => e.preventDefault()}>
                VOTE
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col xl="4" className="d-none d-xl-block">
          <Card className="mb-5">
            <img alt="..." className="card-img-top" src={stock3} />
            <CardBody>
              <h4 className="card-title font-weight-bold font-size-lg">
               Timi Oyebajo
              </h4>
              <h6>16S04/081</h6>
              <p className="card-text">
               
                I believe that creating a cohesive, vibrant community that unites both the young and the old 
              is important to nurturing the growth of students. I believe that togetherness in the community are 
              the anchors of this student body, creating and maintaining this sense of community. Therefore, I 
              believe that the students' views should be taken into consideration and supported by members 
              of a community as important reminders and symbols of cohesive community.

              </p>
              <Button
                tag="a"
                color="primary"
                href="#/"
                onClick={e => e.preventDefault()}>
               VOTE
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}


