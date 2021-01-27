import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/offer" component={Form} />
      </Switch>
    </div>
  );
};

export default App;
