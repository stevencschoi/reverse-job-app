import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import OfferStart from './components/OfferStart';

import { DataContextProvider } from './components/context/DataContext';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <DataContextProvider>
          <Route exact path="/" component={Home} />
          <Route exact path="/offer" component={OfferStart} />
        </DataContextProvider>
      </Switch>
    </div>
  );
};

export default App;
