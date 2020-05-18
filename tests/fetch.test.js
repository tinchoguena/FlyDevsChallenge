import {fetchTest} from '../src/store/services/fetchPokemon';

test('First pokemon name test ', async () => {
  const data = await fetchTest();
  expect(data[0].name).toEqual('spearow');
});
