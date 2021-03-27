import logo from './logo.svg';
import './App.css';

import { Container } from '@material-ui/core';
import Login from './pages/Login';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8080";

function App() {
  return (
    <Container style={{marginTop: '10vh'}}>
        <Login />
    </Container>
      
    
  );
}

export default App;
