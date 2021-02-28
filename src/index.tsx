import React from 'react';
import ReactDOM from 'react-dom';
import { useRoutes } from 'react-router-dom';

const routesArray = [{ path: '', element: <div /> }];

const App = () => {
  const routes = useRoutes(routesArray);
  return routes;
};

ReactDOM.render(<App />, document.getElementById('src'));
