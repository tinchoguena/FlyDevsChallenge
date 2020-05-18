import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import PokemonNavigation from './src/navigation/PokemonNavigation';
import PokemonReducer from './src/store/reducers/pokemonReducer';

const store = createStore(
  PokemonReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

const App = () => {
  return (
    <Provider store={store}>
      <PokemonNavigation />
    </Provider>
  );
};

export default App;
