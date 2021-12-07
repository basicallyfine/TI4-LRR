import { Container } from 'react-bootstrap';

import PrimaryNav from './components/PrimaryNav';
import './styles/index.css';

const App = ({ children }) => {
  return (
    <div className="App">
      <PrimaryNav />
      <Container  fluid="lg">
        {children}
      </Container>
    </div>
  );
}

export default App;
