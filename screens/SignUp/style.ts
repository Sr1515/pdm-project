import { theme } from "@/theme";
import styled from "styled-components/native";

export const ContainerHeader = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background}; 
  padding: 26px;
`;

export const ContainerSignUp = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  background-color: ${props => theme.colors.background};
  align-items: center;
  justify-content: space-evenly;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 95%;
  border-bottom-width: 2px;
  border-bottom-color: gray; 
  margin-bottom: 0px;
`;

export const InputSignUp = styled.TextInput`
  flex: 1; 
  height: 40px; 
  color: gray;
  font-size: 16px; 
  margin-left: 10px; 
  padding-left: 10px; 
`;


export const TitleSignUp = styled.Text`
  font-size: 24px;
  color: #000;
  margin-bottom: 20px;
`;


export const ButtonSignUp = styled.TouchableOpacity`
  width: 86%;
  height: 50px;
  padding-top: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const SignUpButtonFooter = styled.TouchableOpacity`
  width: 86%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;


export const TextContainer = styled.View`
  padding-top: 20px;
  flex-direction: row; 
  align-items: center; 
`;

export const Text = styled.Text`
  font-size: 11px;
  color: gray
`;

export const LoginLink = styled.Text`
  color: #007bff; 
  font-size: 16px;
  text-decoration: underline; 
  margin-left: 5px; 
`;


export const ButtonTextSignUp = styled.Text`
  color: #fff;
  font-size: 18px;
`;

