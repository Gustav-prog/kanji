import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {logout} from '../services/AuthService';


const TopNavBar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
      };

  
	return (
        <>
		<Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav>
                        <Nav.Link href='/quiz'>Quiz</Nav.Link>
                        <NavDropdown title="Practice" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">JLPT 1 (coming soon)</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">JLPT 2 (coming soon)</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">JLTP 3 (coming soon)</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">JLTP 4 (coming soon)</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/practice">JLTP 5</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                        <Button onClick={handleLogout}>Log out</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
	);
}

export default TopNavBar;