import './App.css';
import { Switch, Route } from 'react-router-dom'

import Header from './components/header/Header';
import HomePage from './pages/home/HomePage';
import CollectionsPage from './pages/collections/CollectionsPage';
import SigninSignupPage from './pages/signin-signup/SigninSignupPage';
import Mens from './pages/mens/Mens'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signin" component={SigninSignupPage} />
        <Route exact path="/collections" component={CollectionsPage} />
        <Route exact path="/mens" component={Mens} />

      </Switch>

    </div>
  );
}

export default App;
