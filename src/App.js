//import logo from './logo.svg';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import './App.css';
import React from "react";
import { Card } from 'react-bootstrap';

// class App extends Component {
//   render() {
//     return (

      const App = () => (
      <div className="App">
        <NavBar />
        
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Footer />
      </div>
      )

export default App;
