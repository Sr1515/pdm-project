import { theme } from "@/theme";
import styled from "styled-components/native";

export const ContainerHeader = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background}; 
  padding: 24px;
`;

export const ContainerLogin = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => theme.colors.background};
  justify-content: space-evenly;
  gap: 0px;
  align-items: center;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 95%;
  border-bottom-width: 2px;
  border-bottom-color: gray; 
  margin-bottom: 0px;
`;

export const InputLogin = styled.TextInput`
  flex: 1; 
  height: 40px; 
  color: gray;
  font-size: 16px; 
  margin-left: 10px; 
  padding-left: 10px; 
`;


export const TitleLogin = styled.Text`
  font-size: 24px;
  color: #000;
  margin-bottom: 20px;
`;


export const ButtonLogin = styled.TouchableOpacity`
  width: 86%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const ButtonTextLogin = styled.Text`
  color: #fff;
  font-size: 18px;
`;

