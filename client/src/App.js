import logo from './logo.svg';
import './App.css';

import { Container } from '@material-ui/core';
import Login from './pages/Login';
import Signup from './pages/Signup';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8080";

function App() {
  return (
    <Container style={{marginTop: '10vh'}}>
        <Signup />
    </Container>
      
    
  );
}

export default App;
