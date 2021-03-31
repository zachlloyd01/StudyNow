import './App.css';
import { green, yellow } from "@material-ui/core/colors";
import { Container, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, Signup, Home } from './pages';
import { NavBar } from './components';
import axios from 'axios';

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

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <NavBar />  
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
