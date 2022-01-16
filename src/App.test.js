import App from './App';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { customerReducer } from './store/reducers/customerReducer';
import thunk from 'redux-thunk';

test('should render Customer component', () => {
  const composeEnhancers =
    (typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  const reducers = combineReducers({
    customers: customerReducer,
  });

  const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
