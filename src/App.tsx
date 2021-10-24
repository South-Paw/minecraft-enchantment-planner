import { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { FullPageLoading } from './components/FullPageLoading';

const PlannerPage = lazy(() => import('./pages/Planner'));

export const App: React.FC = () => (
  <Suspense fallback={<FullPageLoading />}>
    <Switch>
      <Route path="/planner" render={() => <PlannerPage />} />

      <Route render={() => <Redirect push to="/planner" />} />
    </Switch>
  </Suspense>
);
