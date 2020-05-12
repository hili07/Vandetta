import React, { Fragment } from 'react';

import { Row, Col, CardBody, Card, Button } from 'reactstrap';
import stock1 from './.././assets/img/products/sd.jpg';
import stock2 from './.././assets/img/products/spoo.jpg';
import stock3 from './.././assets/img/products/sdd.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Row>
        <Col xl="4" lg="6">
          <Card className="mb-5">
            <img alt="..." className="card-img-top" src={stock1} />
            <CardBody>
              <h4 className="card-title font-weight-bold font-size-lg">
               Olabode Johnson
              </h4>
              <h6>16L01/067</h6>
              <p className="card-text">
              Leadership requires hardwork, accountability, responsibility, 
              selflessness. I posses these attributes and oblige  you to consider me as the best candidate.
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
                Edosa Irosogie
              </h4>
              <h6>18N04/189</h6>
              <p className="card-text">
                Together we can restore sport activities to what is should be,
                I need your votes to make this a reality. 
              </p>
              <p>Let's so this!.</p>
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
               Yakub Idris
              </h4>
              <h6>16L01/077</h6>
              <p className="card-text">
                Sports is a very paramount aspect of the school system that has been taken for granted in the past.
                If I occupy this position, I'd ensure it is brought back to its glory and will make sure this position
                 is not taken for granted. 
              </p>
             <p>VOTE Yakub, VOTE agility!.</p>
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

