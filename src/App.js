import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavBar from './componets/layout/NavBar';

import EditarProfessor from './componets/pages/EditarProfessor';
import Home from './componets/pages/Home';
import NovoProfessor from './componets/pages/NovoProfessor';
import Professores from './componets/pages/Professores';

import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/professores'>
              <Professores />
            </Route>
            <Route path='/novoprofessor'>
              <NovoProfessor />
            </Route>
            <Route path='/editarprofessor/:id'>
              <EditarProfessor />
            </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;

