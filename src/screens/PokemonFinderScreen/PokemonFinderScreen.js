import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Platform, FlatList, ActivityIndicator} from 'react-native';
import RenderItem from '../../components/renderItem/RenderList';

import {
  StartView,
  TitleBlack,
  TitleContainer,
  Input,
  InputText,
  HeaderWrapper,
  KeyboardWrapper,
  ErrorMsj,
  GoBack,
  PokeImage,
  ActivityWrapper,
  ListWrapper,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../constants/Colors';

const PokemonFinderScreen = ({navigation}) => {
  const [pokemonName, setPokemonName] = useState('');
  const [filteredList, setFilteredList] = useState(null);

  const pokemonFullList = useSelector((state) => state.pokemonFilteredList);
  const loading = useSelector((state) => state.loading);
  const errorMsj = useSelector((state) => state.error);

  useEffect(() => {
    if (pokemonName === '') {
      setFilteredList(pokemonFullList);
    } else {
      const filtered = pokemonFullList.filter((x) =>
        x.name.toLowerCase().includes(pokemonName.toLowerCase()),
      );
      setFilteredList(filtered);
    }
  }, [pokemonName, pokemonFullList]);

  const searchPokemonHandler = (text) => {
    setPokemonName(text);
  };

  return (
    <StartView>
      <GoBack
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name="chevron-left" size={20} color={Colors.secondary} />
      </GoBack>
      <KeyboardWrapper behavior={Platform.OS === 'ios' ? 'height' : null}>
        <HeaderWrapper>
          <PokeImage source={require('../../asstets/Pokeball.png')} />
          <TitleContainer>
            <TitleBlack>Search your Pokemon!</TitleBlack>
          </TitleContainer>
          <Input>
            <InputText
              autoFocus={true}
              placeholder="Pokemon Name"
              placeholderTextColor="#C7C7CD"
              onChangeText={(text) => {
                searchPokemonHandler(text);
              }}
              value={pokemonName}
            />
          </Input>
          {errorMsj ? <ErrorMsj>{errorMsj}</ErrorMsj> : null}
        </HeaderWrapper>
        <ListWrapper>
          {(loading || filteredList === null) && (
            <ActivityWrapper>
              <ActivityIndicator size="large" color={Colors.solid} />
            </ActivityWrapper>
          )}
          {!loading && filteredList?.length === 0 ? (
            <ErrorMsj>There are no results for this pokemon</ErrorMsj>
          ) : (
            <FlatList data={filteredList} renderItem={RenderItem} />
          )}
        </ListWrapper>
      </KeyboardWrapper>
    </StartView>
  );
};

PokemonFinderScreen.navigationOptions = {
  header: null,
};

export default PokemonFinderScreen;
