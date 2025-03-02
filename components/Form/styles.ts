import { TextInput, View } from "react-native";
import styled from "styled-components/native";

const errorColor = "red";
const successColor = "green";
const focusedColor = "white";
const inactiveColor = "gray";

export const InputContainer = styled(View) <{
  hasError?: boolean;
  isFocused?: boolean;
  isValid?: boolean;
}>`
  flex-direction: row;
  align-items: center;
  height: 50px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) =>
    props.hasError
      ? errorColor
      : props.isValid
        ? successColor
        : props.isFocused
          ? focusedColor
          : inactiveColor};
  margin-bottom: 20px;
  padding: 0 10px;
`;

export const InputLogin = styled(TextInput).attrs<{ isFocused?: boolean }>((props) => ({
  placeholderTextColor: props.isFocused ? "white" : "gray",
})) <{ isFocused?: boolean }>`
  flex: 1;
  height: 40px;
  color: ${(props) => (props.isFocused ? "white" : "gray")};
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

export const Container = styled.View`
  flex: 1;
  background-color: gray;
  padding: 24px;
`;

export const ContainerLogin = styled.SafeAreaView`
  flex: 1;
  background-color: white;
  justify-content: space-evenly;
  gap: 0px;
  align-items: center;
`;

export const TextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
`;
