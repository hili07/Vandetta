import logo200Image from 'assets/img/logoo.png';
import sidebarBgImage from 'assets/img/sidebar/sidebar-4.jpg';
import SourceLink from 'components/SourceLink';
import React from 'react';

import { FaTools,
  FaVoteYea,
  FaCheckDouble,
  FaBallotBox
 } from 'react-icons/fa';
import {
  MdAccountCircle,
  MdArrowDropDownCircle,
 

  MdBuild,
  
  MdHome,
  
  
  
  MdKeyboardArrowDown,
  MdNotificationsActive,
  MdPages,
  
  MdLaptop,
  MdLaptopChromebook,
  MdLaptopMac,
  MdStar,
 
  MdViewCarousel,
 
   MdHistory,
 
  
  MdAutorenew,
} from 'react-icons/md';
import { MdHowToVote } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import {
  // UncontrolledTooltip,
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from 'utils/bemnames';

const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const navComponents = [
  { to: '/buttons', name: 'President', exact: false, Icon: FaVoteYea },
  {
    to: '/button-groups',
    name: 'Vice-President',
    exact: false,
    Icon: FaVoteYea,
  },
  { to: '/forms', name: 'General Secretary', exact: false, Icon: FaVoteYea },
  { to: '/input-groups', name: 'Sports Director', exact: false, Icon: FaVoteYea},
  { to: '/typography', name: 'Treasurer', exact: false, Icon: FaVoteYea },
  { to: '/tables', name: 'Financial Secretary', exact: false, Icon: FaVoteYea},
  /*{
    to: '/dropdowns',
    name: 'dropdowns',
    exact: false,
    Icon: MdArrowDropDownCircle,
  },
  { to: '/badges', name: 'badges', exact: false, Icon: MdStar },
  { to: '/alerts', name: 'alerts', exact: false, Icon: MdNotificationsActive },*/
 
];

const navContents = [
 
  { to: '/progress', name: 'Faulty Laptop', exact: false, Icon: MdBuild },
  { to: '/modals', name: 'Laptop Re-Issuance', exact: false, Icon: MdLaptopMac },

];



const navItems = [
  { to: '/', name: 'Home Page', exact: true, Icon: MdHome },
  /*{ to: '/cards', name: 'cards', exact: false, Icon: MdWeb },
  { to: '/charts', name: 'charts', exact: false, Icon: MdInsertChart },
  { to: '/widgets', name: 'widgets', exact: false, Icon: MdWidgets },*/
];
const pageContents = [
  { to: '/login', name: 'login / signup', exact: false, Icon: MdAccountCircle },
 /* {
    to: '/login-modal',
    name: 'login modal',
    exact: false,
    Icon: MdViewCarousel,
  }*/
];
const bem = bn.create('sidebar');

class Sidebar extends React.Component {

   
  state = {
    isOpenComponents: true,
    isOpenContents: true,
    isOpenPages: true,
  };

  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() {
    return (
      <aside className={bem.b()} data-image={sidebarBgImage}>
        <div className={bem.e('background')} style={sidebarBackground} />
        <div className={bem.e('content')}>
          <Navbar>
            <SourceLink className="navbar-brand d-flex">
              <img
                src={logo200Image}
                width="50"
                height="40"
                className="pr-2"
                alt=""
              />
              <span className="text-white">
           ACU DECIDES <FaCheckDouble />
              </span>
            </SourceLink>
          </Navbar>
          <Nav vertical>
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}

            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Components')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <FaCheckDouble className={bem.e('nav-item-icon')} />
                  <span className=" align-self-stat">POSTS</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenComponents
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenComponents}>
              {navComponents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>

           
       
            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Pages')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdPages className={bem.e('nav-item-icon')} />
                  <span className="">Pages</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenPages
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenPages}>
              {pageContents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>
          </Nav>
          </div>
        
      </aside>
    );
  }
  
}

export default Sidebar;
/*
  <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Contents')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdHistory className={bem.e('nav-item-icon')} />
                  <span className="">HISTORY</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenContents
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenContents}>
              {navContents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>
</Nav>
];*/