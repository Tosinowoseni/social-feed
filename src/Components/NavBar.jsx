import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './NavBar.css';
function NavBar() {
  return (
    <Navbar className='navbar' expand='lg' variant='light' bg='light'>
      <Container>
        <Navbar.Brand href='#' style={{ fontWeight: 'bold' }}>
          Social<span style={{ color: 'grey' }}>Feed</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;