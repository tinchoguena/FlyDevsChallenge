import styled from 'styled-components/native';
import Colors from '../../constants/Colors';
import {KeyboardAvoidingView} from 'react-native';

const StartView = styled.View`
  flex: 1;
  background-color: ${Colors.primary};
  align-items: center;
`;

const KeyboardWrapper = styled(KeyboardAvoidingView)`
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const HeaderWrapper = styled.View`
  flex: 1;
  background-color: ${Colors.primary};
  align-items: center;
  margin-top: 5%;
`;

const ActivityWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.primary};
`;

const ListWrapper = styled.View`
  background-color: ${Colors.primary};
  height: 60%;
  width: 90%;
  margin-bottom: 40px;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const Input = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 15px;
  border-radius: 10px;
  border: 1px solid #f5f5f5;
  background-color: #fff;
  width: 60%;
  height: 40px;
  margin-top: 4%;
`;

const InputText = styled.TextInput`
  flex: 1;
  width: 85%;
  margin-left: 13px;
`;

const TitleBlack = styled.Text`
  font-size: 24px;
  color: ${Colors.solid};
  font-weight: 600;
  flex-direction: row;
`;

const ErrorMsj = styled.Text`
  padding-top: 3%;
  max-width: 90%;
  height: 40px;
  color: red;
  font-size: 16px;
`;

const GoBack = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  align-self: flex-start;
  margin-top: 10%;
  margin-left: 4%;
`;

const PokeImage = styled.Image`
  height: 40px;
  width: 40px;
  background-color: transparent;
  margin-bottom: 5px;
`;

export {
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
};
