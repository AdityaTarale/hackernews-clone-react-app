import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "../components/Header";
import ShowStories from "../components/ShowStories";
import PageNotFound from "../components/PageNotFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
          <Redirect exact from="/" to="/top" />
          <Route
            path="/:type"
            render={({ match }) => {
              const { type } = match.params;
              if (!["top", "new", "best"].includes(type)) {
                return <Redirect to="/" />;
              }
              return <ShowStories type={type} />;
            }}
          />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
