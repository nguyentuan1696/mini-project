import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route to='/' component={HomePage} />
        <Route to='/contact' component={ContactPage} />
      </Switch>
    </Router>
  )
}

export default App;
