import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

class PulseNav extends Component {
  constructor(props) {
    super(props);
    this._createNavItems = this._createNavItems.bind(this);
  }
  _createNavItems() {
    let navItems = [];
    for (let linkInfo of this.props.links) {
        navItems.push(<NavItem href={linkInfo['href']} >
            {linkInfo['title']}
            </NavItem>);
    }
    return navItems;
  }
  render() {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">Pulse 2018</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                {this._createNavItems()} 
            </Nav>
        </Navbar>
    );
  }
}

export default PulseNav;
