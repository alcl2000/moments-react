import styles from './App.module.css'
import NavBar from './components/Navbar';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className={styles.App}>
      <NavBar/>
      <Container className={styles.Main}>
        <h1>Home Page</h1>
        <h1>Sign In</h1>
      </Container>
    </div>
  );
}

export default App;