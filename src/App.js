import './App.css';
import { Switch, Route } from 'react-router-dom'

import Header from './components/header/Header';
import HomePage from './pages/home-page/HomePage';
import Collections from './pages/collections/Collections';
import SigninSignup from './pages/signin-signup/SigninSignup';
import Mens from './pages/mens/Mens'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signin" component={SigninSignup} />
        <Route exact path="/collections" component={Collections} />
        <Route exact path="/mens" component={Mens} />

      </Switch>

    </div>
  );
}

export default App;
