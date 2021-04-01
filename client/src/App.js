import './App.css';
import { green, yellow } from "@material-ui/core/colors";
import { Container, createMuiTheme, ThemeProvider, Snackbar } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, Signup, Home, NavBar } from './pages';
import { Notifier } from "./Components";
import { useEffect, useState } from 'react';
import axios from "./axios.config";

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

  const [notifications, setNotifications] = useState([]);
  
  axios.interceptors.response.use(
    function(response) {
        return Promise.resolve(response);
    },
    function(error) {
        console.error('error');
        setNotifications([ { message: error, severity: 'error' } ])
        return Promise.reject(error);
    }
  );


  return (
    <Router>
      <ThemeProvider theme={theme}>
        <NavBar links={navLinks} />  
        { notifications.map(function(notification) {
           <p>bruh</p>
        }) }
        <Notifier notifications={notifications}/>
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
