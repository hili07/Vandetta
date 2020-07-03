import React, { Fragment } from 'react';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { Row, Col, CardBody, Card, Button } from 'reactstrap';
import stock1 from './.././assets/img/products/fiii.png';
import stock2 from './.././assets/img/products/sport.jpg';
import stock3 from './.././assets/img/products/spo.jpg';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
const DashboardPage = React.lazy(() => import('pages/DashboardPage'));
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
               Yosola Oluwole
              </h4>
              <h6>17S01/097</h6>
              <p className="card-text">
                I, Yosola am an epitome of accountability. VOTE for me and 
                put leadership in the best hands.
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
                Osas Omorobe
              </h4>
              <h6>15N05/069</h6>
              <p className="card-text">
                Osas is the man for you. O.O the MAN for you!.
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
               Sola Jegede
              </h4>
              <h6>17S05/021</h6>
              <p className="card-text">
              Consistency and determination are my weapons in this race. 
              VOTE JEGEDE, VOTE TRANQUILITY.
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
          <Route exact path='/' component={DashboardPage}/>
          <Link to="/" className='button'>
            <Button className='float-right' type="button"  color= "primary" size= "lg">
       
                SUBMIT    
            </Button>
          </Link>
          </div>
    </div>
  );
}

