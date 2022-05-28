import "./theme/app.css";

import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/home";

function App() {
  const routes = useRoutes([{ path: "/", element: <Home /> }]);
  return <div className="App">{routes}</div>;
}

export default App;
