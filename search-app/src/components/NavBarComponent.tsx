import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom';

export const NavbarComponent = (props:any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Sad Name UI</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to='/state/login'>Login</Link>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/wsingleton/191216-react-combo">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Links
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to='/chucknorris'>ChuckNorris</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to='/state/pokemon'>Pokemon</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to='/clicker'>Clicker</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>This is a movie databse</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}