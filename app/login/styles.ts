import { theme } from "@/theme";
import styled from "styled-components/native";
import { Link } from "expo-router";

const errorColor = 'red';
const successColor = 'green';

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

export const InputContainer = styled.View<{ hasError?: boolean; isValid?: boolean }>`
  flex-direction: row;
  align-items: center;
  height: 50px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) =>
    props.hasError ? errorColor : props.isValid ? successColor : 'gray'}; 
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

export const ErrorText = styled.Text`
  color: ${errorColor};
  font-size: 12px;
  margin-top: 5px;
  margin-left: 10px;

`;
export const TextContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.Text`
    font-size: 16px;
    color: #333;
`;

export const SignUpLink = styled(Link)`
    font-size: 16px;
    color: #007bff;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;