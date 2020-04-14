import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from './routes';
import { AnimatePresence } from 'framer-motion';

import Layout from './components/Layout';
import Social from './components/Social';

const App = () => {

  return (
        <Layout>
            <Social />
            <AnimatePresence exitBeforeEnter>
                <Switch>
                    {routes.map((item, index) => (
                        <Route
                            key={index + Date.now()}
                            exact={item.exact}
                            path={item.path}
                            component={item.component}
                        />
                    ))}
                </Switch>
            </AnimatePresence>
        </Layout>
  );
};

export default App;
