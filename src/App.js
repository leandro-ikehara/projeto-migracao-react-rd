import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";
import 'react-bootstrap';
import './App.css';

import Header from "./components/template/Header/Header";
import Footer from "./components/template/Footer/Footer";
import Sidebar from "./components/macro/Sidebar";

function App() {
  return (
    <>

      <Header />
      <Sidebar />
      <Router>
        <Routes />
      </Router>
      <Footer />
    </>
  )
}

export default App;