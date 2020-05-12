import React, { Fragment } from 'react';

import { Row, Col, CardBody, Card, Button } from 'reactstrap';
import stock1 from './.././assets/img/products/veep.jpg';
import stock2 from './.././assets/img/products/COLUMBUS SHORT.jpg';
import stock3 from './.././assets/img/products/TRE.jpg';


export default function LivePreviewExample() {
  return (
    <Fragment>
      <Row>
        <Col xl="4" lg="6">
          <Card className="mb-5">
            <img alt="..." className="card-img-top" src={stock1} />
            <CardBody>
              <h4 className="card-title font-weight-bold font-size-lg">
               Tosin Majekodunmi
              </h4>
              <h6>15S01/088</h6>
              <p className="card-text">
                I am counting on this great student body to deem me fit for 
                this position. Vote Tosin,Vote Trust, Vote Treasurer!.
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
               Trisha Orabomen
              </h4>
              <h6>18N03/061</h6>
              <p className="card-text">
               Some are leaders and some lead with the followers. I will put each and every student into consideration
               during my tenure as the treasurer, I will be tranquil and dependable. VOTE WISELY!. 
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
            <img alt="..." className="card-img-top" src={stock2} />
            <CardBody>
              <h4 className="card-title font-weight-bold font-size-lg">
             Oladeji Olateju-Stewart
              </h4>
              <h6>16L01/181</h6>
              <p className="card-text">
                The Teju Treasurer Translation stands for accountability, financial responsibility,
                and trust, it stands with the authority to stand on behalf of the students. I am here for you!.

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

