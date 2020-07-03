import { AnnouncementCard, TodosCard } from 'components/Card';
import HorizontalAvatarList from 'components/HorizontalAvatarList';
import MapWithBubbles from 'components/MapWithBubbles';
import Page from 'components/Page';
import ProductMedia from 'components/ProductMedia';
import SupportTicket from 'components/SupportTicket';
import UserProgressTable from 'components/UserProgressTable';
import { IconWidget, NumberWidget } from 'components/Widget';
import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';
import {
  avatarsData,
  chartjs,
  productsData,
  supportTicketsData,
  todosData,
  userProgressTableData,
} from 'demos/dashboardPage';
import React from 'react';
import background1 from './.././assets/img/products/voo.png';
import background2 from './.././assets/img/products/vo.jpg';
import background3 from './.././assets/img/products/vut.png';

import { Bar, Line } from 'react-chartjs-2';
import {
  MdBubbleChart,
  MdInsertChart,
  MdPersonPin,
  MdPieChart,
  MdRateReview,
  MdShare,
  MdShowChart,
  MdThumbUp,
} from 'react-icons/md';
import InfiniteCalendar from 'react-infinite-calendar';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardDeck,
  CardGroup,
  CardHeader,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';
import { getColor } from 'utils/colors';

const today = new Date();
const lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7,
);

class DashboardPage extends React.Component {
  componentDidMount() {
    
    window.scrollTo(0, 0);
  }

  render() {
    const primaryColor = getColor('primary');
    const secondaryColor = getColor('secondary');

    return (
      <Page
        className="DashboardPage"
        title="Home"
        breadcrumbs={[{ name: 'Home', active: true }]}
      >
        <div class="card-columns">
  <div class="card ">
    <img class="card-img-top" src= {background1} alt="Card image cap"/>
    <div class="card-body">
      <h4 class="card-title"><b>I will VOTE because... </b></h4>
      <p class="card-text"><p>It is my responsibility as a Student</p>
      <p>It is an opportunity for positive change.</p>
      <p>Not voting is giving up my voice. </p>
      </p>
    </div>
  </div>
  <div class="card p-3 text-right bg-primary">
    
      <p>Democracy is “government of, by and for the people”.</p> 
      <h6><footer class="blockquote-footer text-dark">
        
        Abraham Lincoln  </footer>
      </h6>
  
  </div>
  <div class="card border-warning">
  <div class="card-body ">
      <h4 class="card-title"><b> Fun Historical Fact</b></h4>
      <p>The term "democracy" first appeared in ancient Greek political and philosophical thought in
         the city-state of Athens during classical antiquity. The word comes from demos, "common people"
          and kratos, "strength".Led by Cleisthenes, Athenians established what is generally held 
        as the first democracy in 508–507 BC. Cleisthenes is referred to as "the father of Athenian 
        democracy."
        Athenian democracy took the form of a direct democracy, and it had  distinguishing features: the
         random selection of ordinary citizens to fill the few existing government administrative and judicial 
         offices, and a legislative assembly consisting of all Athenian citizens.All eligible citizens
         were allowed to speak and vote in the assembly, which set the laws of the city state.  
</p>
      </div>
  </div>
  <div class="card border-warning">
    
    <div class="card-body">
      <h4 class="card-title"><b>Rules for Voting</b></h4>
      <p class="card-text">
        <p>Every student MUST vote. </p>
        <p>Each Student MUST Vote for ONLY one candidate per post.</p>
        <p>Ensure You sit right and look straight into the capturing device while voting,
           as failure to do so might result to no vote count.</p>
        <p>Do not let any other student vote on your behalf.</p>
        <p>Vote free from coercion or intimidation by  any other student. </p>
        </p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card bg-primary  text-right p-3">
    
      <p class= "mb-0">"If we don’t vote, we are ignoring history and giving away the future."</p>
      <h6><footer class="blockquote-footer text-dark">
        
          Andra Chantim  </footer>
        </h6>
     
    
  </div>
  <div class="card border-warning text-left">
    <div class="card-body">
      <h4 class="card-title"><b>Voting Histoty in Nigeria</b></h4>
      <p class="card-text"> The right to vote in Nigeria has a rather chequered history. Universal
      adult suffrage became a reality in Nigeria in the 1979 elections when women in the North were allowed
      for the first time to participate in elections. Originally, the right to vote was thought of as a direct consequence
      of property interests rather than adhering to the person as a political right.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img class="card-img" src= {background2} alt="Card image"/>
  </div>
  <div class="card p-3 text-right bg-primary">
    
      <p>"If popular control of government through the mechanism of elections is the essence of
        democracy, it folllows that the control should be by all people and not by any few among them. Unless it can
        be proved that those who are excluded are either unfit or incompitent to exercise the vote. . ."
      </p>
      <h6><footer class="blockquote-footer text-dark">
        
        Venkatarangaiya  </footer>
      </h6>
  
  </div>
  <div className="card">
  <img class="card-img-top" src= {background3} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title "><b> Your VOTE will...</b></h5>
      <p class="card-text"> 
      <p>Support legitimate, inclusive and sound governance.</p>
     <p> Protect the basic rights of the student body.</p>
      <p>Support stable and peaceful democratic transitions.</p>
      <p>Ensure an ACUSA representative body that seeks first the best interests of the Student body.</p>
      </p>
      
    </div>
  </div>
</div>

      </Page>    
        
          
    );
  }
}
export default DashboardPage;

/*<CardGroup style={{ marginBottom: '1rem' }}>
          <IconWidget
            bgColor="white"
            inverse={false}
            icon={MdThumbUp}
            title="50+ Likes"
            subtitle="People you like"
          />
          <IconWidget
            bgColor="white"
            inverse={false}
            icon={MdRateReview}
            title="10+ Reviews"
            subtitle="New Reviews"
          />
          <IconWidget
            bgColor="white"
            inverse={false}
            icon={MdShare}
            title="30+ Shares"
            subtitle="New Shares"
          />
        </CardGroup>
        <Col lg="8" md="12" sm="12" xs="12">
            <Card inverse className="bg-gradient-primary">
              <CardHeader className="bg-gradient-primary">
                Map with bubbles
              </CardHeader>
              <CardBody>
                <MapWithBubbles />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <CardDeck style={{ marginBottom: '1rem' }}>
          <Card body style={{ overflowX: 'auto','paddingBottom':'15px','height': 'fit-content','paddingTop': 'inherit'}}>
            <HorizontalAvatarList
              avatars={avatarsData}
              avatarProps={{ size: 50 }}
            />
          </Card>

          <Card body style={{ overflowX: 'auto','paddingBottom':'15px','height': 'fit-content','paddingTop': 'inherit'}}>
            <HorizontalAvatarList
              avatars={avatarsData}
              avatarProps={{ size: 50 }}
              reversed
            />
          </Card>
        </CardDeck>
        <Col md="6" sm="12" xs="12">
            <Card>
              <CardHeader>New Products</CardHeader>
              <CardBody>
                {productsData.map(
                  ({ id, image, title, description, right }) => (
                    <ProductMedia
                      key={id}
                      image={image}
                      title={title}
                      description={description}
                      right={right}
                    />
                  ),
                )}
              </CardBody>
            </Card>
          </Col>
          <Row>
          <Col lg="4" md="12" sm="12" xs="12">
            <AnnouncementCard
              color="gradient-secondary"
              header="Announcement"
              avatarSize={60}
              name="Jamy"
              date="1 hour ago"
              text="Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam nonummy euismod tinciduntut laoreet doloremagna"
              buttonProps={{
                children: 'show',
              }}
              style={{ height: 500 }}
            />
          </Col>

          <Col lg="4" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>
                <div className="d-flex justify-content-between align-items-center">
                  <span>Support Tickets</span>
                  <Button>
                    <small>View All</small>
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                {supportTicketsData.map(supportTicket => (
                  <SupportTicket key={supportTicket.id} {...supportTicket} />
                ))}
              </CardBody>
            </Card>
          </Col>
          <Col lg="4" md="12" sm="12" xs="12">
            <TodosCard todos={todosData} />
          </Col>
        </Row>
      </Page>
<Col md="6" sm="12" xs="12">
            <Card>
              <CardHeader>Partners</CardHeader>
              <CardBody>
                <UserProgressTable
                  headers={[
                    <MdPersonPin size={25} />,
                    'name',
                    
                    'date',
                    'participation',
                    '%',
                  ]}
                  usersData={userProgressTableData}
                />
              </CardBody>
            </Card>
          </Col>
          <Row>
          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Ongoing Repairs"
              subtitle="This month"
              number="9.8k"
              color="secondary"
              progress={{
                value: 75,
                
              }}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Past Repairs"
              subtitle="This month"
              number="5,400"
              color="secondary"
              progress={{
                value: 45,
                
              }}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Pending Fixes"
              subtitle="This month"
              number="3,400"
              color="secondary"
              progress={{
                value: 90,
                
              }}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Successful Repairs"
              subtitle="This month"
              number="38%"
              color="secondary"
              progress={{
                value: 60,
                
              }}
            />
          </Col>
        </Row>
        
        <div class="card">
  <img class="card-header" src = {background}/>
  <div class="card-body">Content</div>

</div>

        <Row>
          
        <Col xl="4" className=" h-25 d-inline-block ">
          <Card className="mb-7 ">
           <img alt="..." className="card-img-left" src={background} />
          
          
            <CardBody>
            <h4 className="card-title font-weight-bold font-size-lg">
               History of Democracy
              </h4>
              </CardBody>
              </Card>
              </Col>



              <Col xl="4" className=" h-25 d-inline-block ">
          <Card className="mb-7 ">
           <img alt="..." className="card-img-top" src={background} />
          
          
            <CardBody>
            <h4 className="card-title font-weight-bold font-size-lg">
               History of Democracy
              </h4>
              </CardBody>
              </Card>
              </Col>
              <Col xl="4" className=" h-25 d-inline-block ">
          <Card className="mb-7 ">
           <img alt="..." className="card-img-top" src={background} />
          
          
            <CardBody>
            <h4 className="card-title font-weight-bold font-size-lg">
               History of Democracy
              </h4>
              </CardBody>
              </Card>
              </Col>


        <Col lg="6" md="12" sm="12" xs="12">
            <InfiniteCalendar
              selected={today}
              minDate={lastWeek}
              width="100%"
              lenght= '10px'
              theme={{
                accentColor: primaryColor,
                floatingNav: {
                  background: secondaryColor,
                  chevron: primaryColor,
                  color: '#FFF',
                },
                headerColor: primaryColor,
                selectionColor: secondaryColor,
                textColor: {
                  active: '#FFF',
                  default: '#333',
                },
                todayColor: secondaryColor,
                weekdayColor: primaryColor,
              }}
            />
          </Col>
</Row>
*/