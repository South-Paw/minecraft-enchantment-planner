import { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { FullPageLoading } from './components/FullPageLoading';

const EnchantmentPlannerPage = lazy(() => import('./pages/EnchantmentPlanner'));

export function App() {
  return (
    <Suspense fallback={<FullPageLoading />}>
      <Switch>
        <Route path="/planner" render={() => <EnchantmentPlannerPage />} />

        <Route render={() => <Redirect push to="/planner" />} />
      </Switch>
    </Suspense>
  );
}
