import React, { Fragment } from "react";
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
          <Fragment key={route.path}>
            <Route
              path={route.path}
              element={(
                <App>
                  <route.component/>
                </App>
              )}
            />
            {route.children && route.children.map((childRoute) => (
              <Route
                path={childRoute.path}
                key={childRoute.path}
                element={(
                  <App>
                    <childRoute.component/>
                  </App>
                )}
              />
            ))}
          </Fragment>
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
