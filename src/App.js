import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/AllExist/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import LogIn from './Components/LogIn/Login';
import NotFound from './Components/NotFound/NotFound';
// import WidgetFooter from './Components/AllExist/WidgetFooter/WidgetFooter';
import Footer from './Components/AllExist/Footer/Footer';
import Details from './Components/Details/Details';
import Registration from './Components/Registration/Registration';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
          <Router>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/home">
                <Home></Home>
              </Route>
              <Route path="/about">
                <About></About>
              </Route>
              <Route path="/contact">
                <Contact></Contact>
              </Route>
              <PrivateRoute exact path="/details/:Id">
              <Details></Details>
              </PrivateRoute>
              <Route path="/login">
                <LogIn></LogIn>
              </Route>
              <Route path="/registration">
                <Registration></Registration>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
            <Footer></Footer>
          </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
