import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  background-color: ${props => props.theme.colors.background};
  justify-content: space-evenly;
  align-items: center;
  border-top-width: 1px;
  border-top-color: ${props => props.theme.colors.text};
  padding: 20px 0; 
`;

export const MenuItem = styled.TouchableOpacity`
  align-items: center;
`;

export const Icon = styled.Image`
  width: 24px;
  height: 24px;
`;

export const MenuText = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.colors.text};
  margin-top: 5px;
`;



