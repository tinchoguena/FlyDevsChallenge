import React, {useEffect} from 'react';
import {Platform} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {
  StartView,
  TitleWhite,
  TitleBlack,
  TitleContainer,
  SearchTextButton,
  ButtonContainer,
  SearchIcon,
  TitleButton,
  PokeImage,
} from './styles';

import Colors from '../../constants/Colors';

import {fetchPokemon} from '../../store/services/fetchPokemon';

const StartScreen = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemon());
  },[]);
const navigateToPokemonScreen = () => {
  navigation.navigate({routeName: 'PokemonScreen'});
}
  return (
    <StartView>
      <PokeImage source={require('../../asstets/Pokeball.png')} />
      <TitleContainer>
        <TitleBlack>Pokemon</TitleBlack>
        <TitleWhite>Finder</TitleWhite>
      </TitleContainer>
      <ButtonContainer
        onPress={navigateToPokemonScreen}>
        <SearchIcon name="search" size={16} color={Colors.solid} />
        <SearchTextButton
          color={Platform.OS === 'android' ? Colors.secondary : Colors.solid}>
          <TitleButton>Let's Go!</TitleButton>
        </SearchTextButton>
      </ButtonContainer>
    </StartView>
  );
};

StartScreen.navigationOptions = {
  header: null,
};

export default StartScreen;
