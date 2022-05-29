import "./theme/app.css";

import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/home";
import Content from "./pages/content";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/content", element: <Content /> },
  ]);
  return <div className="App">{routes}</div>;
}

export default App;
