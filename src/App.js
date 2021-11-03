import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";
import 'react-bootstrap';
import './App.css';

import Header from "./components/template/Header";

function App() {
  return(
    <>
    <Header />
    <Router>
      <Routes />
    </Router>
    <Footer />
    </>
  )
}

export default App;
