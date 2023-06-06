import { Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function NavBar() {
  return (
    <div >
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href='/'>CRUD</Navbar.Brand>
          <Nav>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/professores'>Professores</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar;