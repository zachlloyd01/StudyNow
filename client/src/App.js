import './App.css';
import { green, yellow } from "@material-ui/core/colors";
import { Container, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, Signup, Home, NavBar } from './pages';
import axios from 'axios';
import { useState } from 'react';

axios.defaults.baseURL = "http://localhost:8080";

function App() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: yellow[800]
      },
      secondary: {
        main: green[700]
      }
    }  
  });

  const [loggedIn, setLoggedIn] = useState(false);

  const [navLinks, setNavLinks] = useState([]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <NavBar links={navLinks} />  
        <Container style={{marginTop: '10vh'}}>
          <Switch>
          <Route path="/" exact><Home /></Route>
            <Route path="/login"><Login /></Route>
            <Route path="/signup"><Signup /></Route>
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
