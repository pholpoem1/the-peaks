import "./theme/app.css";

import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/home";
import Content from "./pages/content";
import Bookmark from "./pages/bookmark";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/content", element: <Content /> },
    { path: "/bookmark", element: <Bookmark /> },
  ]);
  return <div className="App">{routes}</div>;
}

export default App;
