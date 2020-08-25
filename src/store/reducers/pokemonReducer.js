import {
  ADD_POKEMON_RESPONSE,
  POKEMON_REQUEST,
  SET_LOADING,
  SET_ERROR,
} from '../actions/PokemonActions';

const initialState = {
  pokemonList: [],
  loading: false,
  error: '',
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case POKEMON_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ADD_POKEMON_RESPONSE:
      return {
        ...state,
        pokemonList: action.list,
        loading: false,
        error: '',
      };

    case SET_LOADING:
      return {
        ...state,
        loading: action.bool,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
