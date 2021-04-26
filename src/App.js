//import logo from './logo.svg';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import ButtonCV from './components/buttonCV/ButtonCV';
import './App.css';
import React from "react";
import { Card } from 'react-bootstrap';

const App = () => (
<div className="App">
  <NavBar />
  
 
  <ButtonCV />
  <Footer />
</div>
)

export default App;
