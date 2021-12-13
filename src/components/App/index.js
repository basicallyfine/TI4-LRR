import { Container } from "react-bootstrap";

import PrimaryNav from "./PrimaryNav";

import "./index.css";

const App = ({ children }) => {
  return (
    <div id="app-main">
      <PrimaryNav />
      <div className="app-body">
        <Container fluid="lg">{children}</Container>
      </div>
    </div>
  );
};

export default App;
