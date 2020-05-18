import {addPokemonList, setLoading, setError} from '../actions/PokemonActions';

export const fetchPokemon = () => {
  return (dispatch) => {
    dispatch(setLoading(true));

    (async () => {
      try {
        const response = await fetch(
          'https://pokeapi.co/api/v2/pokemon?limit=900',
        );

        if (!response.ok) {
          dispatch(setError('There is an error getting the pokemons'));
        }
        dispatch(setLoading(false));

        const data = await response.json();
        const pokemons = data.results.map(({name, url}) => {
          const res = url.match(/\/(\d{1,3})\b/);
          const img = res
            ? `https://pokeres.bastionbot.org/images/pokemon/${res[1]}.png`
            : null;

          return {
            name,
            img,
          };
        });

        dispatch(addPokemonList(pokemons));
      } catch (e) {
        dispatch(setError('There was an error getting the pokemons'));
      }
    })();
  };
};

export const fetchTest = async () => {
  let err;
  let data;
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=900');
    data = await response.json();
    const res = [...data];
    // console.log('RESPONSE on test fetch', data);
    return res;
  } catch (e) {
    err = 'There is an error getting the pokemons';
    console.log('ERROR', err);
    return null;
  }
};
