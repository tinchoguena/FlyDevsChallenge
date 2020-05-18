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

import {fetchPokemon, fetchTest} from '../../store/services/fetchPokemon';

const StartScreen = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemon());
  });
  const fetchTestFunc = async () => {
    const d = await fetchTest();
    return d;
  };
  console.log('retunr on fetch', fetchTestFunc());
  return (
    <StartView>
      <PokeImage source={require('../../asstets/Pokeball.png')} />
      <TitleContainer>
        <TitleBlack>Pokemon</TitleBlack>
        <TitleWhite>Finder</TitleWhite>
      </TitleContainer>
      <ButtonContainer
        onPress={() => {
          navigation.navigate({routeName: 'PokemonScreen'});
        }}>
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
