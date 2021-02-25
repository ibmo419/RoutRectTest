import './App.css';
import Home from './Components/Home'
import Products from './Components/Products'
import Category from './Components/Category'
import Nav from './Components/Nav'
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Switch>
      <Route exact path='/' exact component={Home}/>
      <Route path='/category' component={Category}/>
      <Route path='/products' component={Products}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
