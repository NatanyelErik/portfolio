import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand className='fw-semibold'>
            Erik De Guzman
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/" className='text-decoration-none text-dark'>Home</Link></Nav.Link>
            <Nav.Link><Link to="/work" className='text-decoration-none text-dark'>Work</Link></Nav.Link>
            <Nav.Link><Link to="/education" className='text-decoration-none text-dark'>Education</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponent