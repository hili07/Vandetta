/*className={bem.e('nav-item')}
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
