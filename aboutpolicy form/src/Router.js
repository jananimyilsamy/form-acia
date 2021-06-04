import React from 'react';
import {Route, Switch} from 'react-router-dom';
// import {HomePage, AboutUs, PageNotFound, MotorInsurancePage} from './pages';
//import DynamicForm from './pages/Forms/DynamicForm';
import DynamicForm from './pages/Forms/DynamicForm';

function Router () {
  return (
    <Switch>
      {/* <Route exact path="/" component={HomePage} />
      <Route exact path="/about-us" component={AboutUs} />
      <Route exact path="/motor-insurance" component={MotorInsurancePage} /> */}
      <Route path="/form" component={DynamicForm} />

      {/* <Route component={PageNotFound} /> */}
    </Switch>
  );
}

export default Router;
