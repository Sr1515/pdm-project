import { theme } from "@/theme";
import styled from "styled-components/native";

export const Container = styled.View`
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
  height: 50px; 
  border-bottom-width: 1px;
  border-bottom-color: gray;
  margin-bottom: 20px;
  padding: 0 10px;
`;

export const InputLogin = styled.TextInput`
  flex: 1; 
  height: 40px; 
  color: gray;
  font-size: 16px; 
  margin-left: 10px; 
  padding-left: 10px; 
`;

export const ButtonLogin = styled.TouchableOpacity`
  width: 86%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;