import { useState } from 'react';
import Home from './components/home';
import About from './components/about';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const handleClick = (str: string) => {
    console.log(str);
  };
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
