import './App.css';
import { green, yellow } from "@material-ui/core/colors";
import { Container, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, Signup, Home, NavBar } from './pages';
import { Notification } from "./Components";
import React, {  /* useState */ } from 'react';
import { useDispatch } from "react-redux";
import axios from "./axios.config";
import { toggleSnackbarOpen } from './redux/actions';

function App() {
  const dispatch = useDispatch();

  axios.interceptors.response.use(function (response) {
    dispatch(toggleSnackbarOpen(response.data, 'success'));
    return Promise.resolve(response);
  }, 
  function (error) {
    console.error(error);
    const errorMessage = error.message.charAt(0).toUpperCase() + error.message.slice(1);
    dispatch(toggleSnackbarOpen(errorMessage, 'error'));
    return Promise.reject(error);
  });


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

  const navLinks = [{
    'to': '/',
    'label': 'home'
  },
  {
    'to': '/signup',
    'label': 'Signup'
  },
  {
    'to': '/login',
    'label': 'Login'
  }];


  


  return (
    <ThemeProvider theme={theme}>
      <Notification />
      <Router>
        <NavBar links={navLinks} />  
        <Container style={{marginTop: '10vh'}}>
          <Switch>
            <Route path="/" exact><Home /></Route>
            <Route path="/login"><Login /></Route>
            <Route path="/signup"><Signup /></Route>
          </Switch>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
