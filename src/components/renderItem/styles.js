import styled from 'styled-components/native';
import Colors from '../../constants/Colors';

const GridItem = styled.View`
  flex: 1;
  height: 120px;
  flex-direction: row;
  background-color: ${Colors.secondary};
  border-radius: 20px;
  margin: 7px;
  padding: 20px;
  justify-content: space-around;
  align-items: center;
`;
const CardImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 100px;
`;

const CardTitle = styled.Text`
  max-width: 65%;
  font-size: 22px;
  font-weight: 600;
  color: ${Colors.solid};
`;
export {GridItem, CardImage, CardTitle};
