import { theme } from "@/theme";
import styled from "styled-components/native";

const errorColor = 'red';
const successColor = 'green';

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
