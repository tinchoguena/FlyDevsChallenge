import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import StartScreen from '../screens/startScreen/StartScreen';
import PokemonScreen from '../screens/PokemonFinderScreen/PokemonFinderScreen';

const PokemonNavigation = createStackNavigator({
  Start: StartScreen,
  PokemonScreen: PokemonScreen,
});

export default createAppContainer(PokemonNavigation);
