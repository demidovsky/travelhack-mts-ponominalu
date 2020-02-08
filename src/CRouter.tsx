import * as React from "react";
import { Switch, Router, Redirect, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Layout from "./Layout";
import { EventsPage } from "./routes/events/EventsPage";
import { LocalPage } from "./routes/local/LocalPage";

const customHistory = createBrowserHistory();

export const CRouter = () => {
  return (
    <Router history={customHistory}>
      <Switch>
        <Route path="/" exact component={Layout} />
        <Route path="/local" component={LocalPage} />
        <Route path="/event/:id" component={EventsPage} />
        {/* <Route
          path="/position-analysis/reportId/:reportId/savedReportId/:savedReportId/:tab?/:compareTab?"
          component={Routes.Report}
        />
        <Route path="/brand-report/:brandId" component={Routes.DashboardPage} /> */}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
