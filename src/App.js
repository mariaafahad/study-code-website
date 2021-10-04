import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from './Components/shared/Footer';
import Page from './Components/Page/Page';
import Course from './Components/Course/Course';
import { createContext } from 'react';
import { useState } from 'react';
import NotFound from './Components/NotFound/NotFound';
import ViewAll from './Components/ViewAll/ViewAll';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import SignUp from './Components/SignUp/SignUp';


export const UserContext = createContext();

function App() {
  const [allCourse, setAllCourse] = useState([]);
  console.log(allCourse);
  return (
    <UserContext.Provider value={[allCourse, setAllCourse]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Page />
          </Route>
          <Route path="/home">
            <Page />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <SignUp />
          </Route>
          <Route path="/course/:courseId">
            <Course />
          </Route>

          <Route path="/footer">
            <Footer />
          </Route>
          <Route path="/viewAll">
            <ViewAll />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
