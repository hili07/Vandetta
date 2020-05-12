import React, { Fragment } from 'react';

import { Row, Col, CardBody, Card, Button } from 'reactstrap';
import stock1 from './.././assets/img/products/pres.jpg';
import stock2 from './.././assets/img/products/presi.jpg';
import stock3 from './.././assets/img/products/presid.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Row>
        <Col xl="4" lg="6">
          <Card className="mb-5">
            <img alt="..." className="card-img-top" src={stock1} />
            <CardBody>
              <h4 className="card-title font-weight-bold font-size-lg">
              Fashola Ayoola
              </h4>
              <h6>15S01/047</h6>
              <p className="card-text">
                I am a Catalyst of change, vote for me and see that ther's a better way things can be.
                Fashola Ayoola, the man for you!.
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
                Latoya Irene
              </h4>
              <h6>16N04/022</h6>
              <p className="card-text">
                In a world of men, I am a phonominal black woman ready to change the game for good. 
                I am for the students' and will relentlessly serve the student body and represent you accordingly.
                L.I.V.E today, CONQUER tomorrow.
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
               Chijindu Ihemena
              </h4>
              <h6>16N02/021</h6>
              <p className="card-text">
                I'm a man of few words, but I plead with you to VOTE right by voting me.
                Bless.
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

