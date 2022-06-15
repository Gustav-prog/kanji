import { Navbar, Container } from 'react-bootstrap';



const Navigation = () => {

  
	return (
        <>
		<Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Navbar.Text >Welcome to Kanji Learner</Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
	);
}

export default Navigation;