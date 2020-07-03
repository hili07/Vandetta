import React, { Fragment } from 'react';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { Row, Col, CardBody, Card, Button } from 'reactstrap';
import stock1 from './.././assets/img/products/vpp.jpg';
import stock2 from './.././assets/img/products/veepe.jpg';
import stock3 from './.././assets/img/products/v.jpg';
const FormPage = React.lazy(() => import('pages/FormPage'));
export default function LivePreviewExample() {
  return (
    <div className= "pl-5">
    <Fragment>
      <Row>
        <Col xl="4" lg="6">
          <Card className="mb-5">
            <img alt="..." className="card-img-top" src={stock1} />
            <CardBody>
              <h4 className="card-title font-weight-bold font-size-lg">
             Modupe Bello
              </h4>
              <h6>14S01/047</h6>
              <p className="card-text">
                Over the years, women have occupied less-tasking roles. As change and progress are inevitable,
                the women have a great chance of being the best leaders. Stand with me!.
               



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
                Sylvia Egbuson
              </h4>
              <h6>18N05/082</h6>
              <p className="card-text">
               The only way to conquer the force of negativity, is to be a positive force to reckon with.
               I, Sylvia radiate positivity, strenght and ressilence. A vote for me, is a vote to prosperity.
               I will not take any vote for granted, as such I will uphold my end of this great honor.
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
               Chukwudubem Okwulehie
              </h4>
              <h6>15S06/019</h6>
              <p className="card-text">
               I stand for the progress of the student body, I will not relent until a positive change is made in every aspect.
               Together we CONQUER!.
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
    <div>
          <Route exact path='/forms' component={FormPage} />
          <Link to="/forms" className='button'>
            <Button className='float-right' type="button"  color= "primary" size= "lg">
       
                NEXT       
            </Button>
          </Link>
          </div>
    </div>
  );
}

