import React from "react";
import { render } from 'react-snapshot';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

import routes from "./routes";
import './styles/index.css';

render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            key={route.label}
            element={
              <App>
                <route.component />
              </App>
            }
          />
        ))}
        <Route path="*" element={<App><h1>NOT FOUND</h1></App>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
