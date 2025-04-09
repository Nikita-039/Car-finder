
import Link from 'next/link';
import { Navbar, Container, Nav } from 'react-bootstrap';
import DarkModeToggle from './DarkModeToggle';

export default function AppNavbar({ darkMode, setDarkMode }) {
  return (
    <Navbar bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'} expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="/">Car Finder</Navbar.Brand>
        <Nav className="ml-auto d-flex align-items-center gap-3">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/wishlist" className="nav-link">Wishlist 💖</Link>
          <DarkModeToggle setDarkMode={setDarkMode} />
        </Nav>
      </Container>
    </Navbar>
  );
}
