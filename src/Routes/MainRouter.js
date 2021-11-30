import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { mainRoute, path } from "./RoutePath";

function MainRouter({}) {
  return (
    <BrowserRouter>
      <Switch>
        {mainRoute.map(({ path, exact, component }, index) => {
          const Component = component;
          return <Route path={path} exact={exact} component={Component} />;
        })}
        <Redirect from={"/"} to={path.landingPath}></Redirect>
      </Switch>
    </BrowserRouter>
  );
}

export default MainRouter;
