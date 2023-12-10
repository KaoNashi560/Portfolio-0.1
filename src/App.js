import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <Route exact path="/" component={ About } />
      <main className="mt-10">
        <Switch>
          <Route exact path="/about" component={ About } />
          <Route path="/portfolio" component={ Portfolio } />
          <Route path="/contact" component={ Contact } />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
