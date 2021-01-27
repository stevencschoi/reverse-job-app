import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import OfferStart from './components/OfferStart';
const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/offer" component={OfferStart} />
      </Switch>
    </div>
  );
};

export default App;
