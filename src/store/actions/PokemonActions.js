export const ADD_POKEMON_RESPONSE = 'ADD_POKEMON_RESPONSE';
export const POKEMON_REQUEST = 'POKEMON_REQUEST';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';

export const addPokemonList = (list) => {
  return {
    type: ADD_POKEMON_RESPONSE,
    list,
  };
};

export const pokemonRequest = () => {
  return {
    type: POKEMON_REQUEST,
  };
};

export const setLoading = (bool) => {
  return {
    type: SET_LOADING,
    bool,
  };
};

export const setError = (error) => {
  return {
    type: SET_ERROR,
    error,
  };
};
