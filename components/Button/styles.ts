import { theme } from "@/theme";
import styled from "styled-components/native";

export const ButtonDefault = styled.TouchableOpacity`
  width: 86%;
  height: 56px;
  border-radius: 5px;
  margin-bottom: 20px;
  background-color: ${props => props.theme.colors.accent};
  align-items: center;
  justify-content: center;
`;


export const TextButton = styled.Text`
    color: ${props => theme.colors.text};
    font-weight: bold;
`