import { theme } from "@/theme";
import styled from "styled-components/native";

export const Container = styled.View`
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

export const InputLabel = styled.Text`
  font-size: 14px;
  justify-content: start;
  color: gray;
  font-weight: bold;
  margin-bottom: 5px;  
`;

export const InputAddProduct = styled.TextInput`
  width: 100%;  
  color: gray;
  font-size: 16px;
  border-bottom-width: 1px; 
  border-bottom-color: gray; 
  background-color: transparent; 
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

export const ButtonInput = styled.TouchableOpacity`
    padding: 7px;
    background-color: ${props => theme.colors.text};
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ButtonAddFooter = styled.TouchableOpacity`
  flex: 1;
  width: 230px;
  height: 0px;
  border-radius: 5px;
  padding-top: 10px;
  margin-bottom: 60px;
  background-color: ${props => props.theme.colors.background};
  margin-left: 17%;
`;