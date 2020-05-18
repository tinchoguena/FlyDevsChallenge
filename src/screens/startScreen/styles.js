import styled from 'styled-components/native';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {KeyboardAvoidingView} from 'react-native';

const StartView = styled.View`
  flex: 1;
  background-color: ${Colors.primary};
  align-items: center;
  justify-content: center;
`;

const TitleContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

const TitleBlack = styled.Text`
  font-size: 24px;
  color: ${Colors.solid};
  font-weight: 600;
  flex-direction: row;
`;
const TitleButton = styled.Text`
  font-size: 18px;
  color: ${Colors.solid};
  font-weight: 600;
  flex-direction: row;
`;

const TitleWhite = styled.Text`
  font-size: 24px;
  color: ${Colors.secondary};
  font-weight: 400;
  flex-direction: row;
`;

const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-horizontal: 15px;
  border-radius: 10px;
  border: 1px solid #f5f5f5;
  background-color: #fff;
  width: 40%;
  height: 40px;
  margin-top: 6%;
`;

const SearchTextButton = styled.View`
  font-size: 16px;
  font-weight: 400;
`;

const SearchIcon = styled(Icon)`
  padding-right: 10px;
`;

const PokeImage = styled.Image`
  height: 60px;
  width: 60px;
  background-color: transparent;
  margin-bottom: 5px;
`;

export {
  StartView,
  TitleWhite,
  TitleBlack,
  TitleContainer,
  SearchTextButton,
  ButtonContainer,
  SearchIcon,
  TitleButton,
  PokeImage,
};
