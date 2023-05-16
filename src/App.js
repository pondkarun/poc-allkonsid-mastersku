import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import 'antd/dist/reset.css';
import './App.css';

import Home from './page/home'
import Antd from './page/antd'
import AllkonsID from './page/allkons-id'

const App = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/antd", element: <Antd /> },
    { path: "allkons-id", element: <AllkonsID /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
