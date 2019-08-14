import { MuiThemeProvider as ThemeProvider } from '@material-ui/core';
import { createBrowserHistory as createHistory } from 'history';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import { createStore } from 'redux';
import { routeHome } from './const/routes';
import { Homepage } from './containers';
import { rootReducer } from './redux/reducers';
import { theme } from './styledComponents/theme';

const store = createStore(
  rootReducer,
);

const history = createHistory();

const TodoApp = () => (
  <>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Route exact={true} path={routeHome} component={Homepage} />
        </Router>
      </ThemeProvider>
    </Provider>
  </>
);

export { TodoApp };
