import { theme } from "@/theme";
import styled from "styled-components/native";

export const ContainerHeader = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  padding: 26px;
`;

export const InputContainer = styled.View`
  flex-direction: column;  
  align-items: flex-start; 
  width: 100%;
  margin-bottom: 10px; 
  margin-top: 40px;
`;

export const InputAddProduct = styled.TextInput`
  width: 100%;  
  color: gray;
  font-size: 16px;
  border-bottom-width: 1px; 
  border-bottom-color: gray; 
  background-color: transparent; 
`;

export const InputLabel = styled.Text`
  font-size: 14px;
  justify-content: start;
  color: gray;
  font-weight: bold;
  margin-bottom: 5px;  
`;

export const Form = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: ${props => theme.colors.background};
    border-radius: 8px;
    margin: 10px;
    gap: 3px;
    margin-top: 100px;
`;

export const Input = styled.TextInput`
    flex: 1;
    padding: 10px;
    font-size: 16px;
    color: #333;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
`;

export const Button = styled.TouchableOpacity`
    padding: 7px;
    background-color: ${props => theme.colors.text};
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: ${props => theme.colors.background}
`;

export const ButtonFooter = styled.TouchableOpacity`
  width: 180px;
  height: 50px;
  border-radius: 5px;
  margin-bottom: 60px;
  background-color: ${props => props.theme.colors.accent};
  align-items: center;
  justify-content: center;
`;

export const ButtonOptions = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  margin-bottom: 20px;
  background-color: ${props => props.theme.colors.accent};
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`

export const ButtonText = styled.Text`
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
`;