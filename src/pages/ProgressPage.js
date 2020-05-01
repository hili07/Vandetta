import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Progress, Row } from 'reactstrap';
import { getThemeColors } from 'utils/colors';

const colors = getThemeColors();

const getRandomInt = () => {
  return Math.floor(Math.random() * (100 - 20) + 20);
};

const ProgressPage = () => {
  return (
    <Page title="Faulty Laptop" breadcrumbs={[{ name: 'faulty laptop', active: true }]}>
      <Row>
        <Col md={{'size':8, 'offset':2}} sm="12">
          <Card>
            <CardHeader>Colors</CardHeader>
            <CardBody>
              {colors.map((color, index) => (
                <Progress
                  key={index}
                  color={color}
                  value={getRandomInt()}
                  className="mb-3"
                />
              ))}
            </CardBody>
          </Card>
        </Col>

        
      </Row>

      
    </Page>
  );
};

export default ProgressPage;
