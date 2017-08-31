import * as React from 'react';
import { PureComponent } from 'react';
import Header from '../Header';
import PatientList from '../PatientList';
import CreatePatient from '../CreatePatient';
import { Switch, Route } from 'react-router-dom';

const App = () =>
  <div>
    <Header />
    <div>
      <Switch>
        <Route exact={true} path="/" component={PatientList} />
        <Route exact={true} path="/create" component={CreatePatient} />
      </Switch>
    </div>
  </div>;

export default App;
