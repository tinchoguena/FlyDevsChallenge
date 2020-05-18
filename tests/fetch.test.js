import {fetchTest} from '../src/store/services/fetchPokemon';

it('works with async/await', async () => {
  // expect.assertions(1);
  const data = await fetchTest();
  expect(data.results[0].name).toEqual('bulbasaur');
});
