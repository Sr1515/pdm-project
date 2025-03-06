import { theme } from "@/theme";
import styled from "styled-components/native";

export const DefaultButton = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  border-radius: 5px;
  margin-bottom: 20px;
  background-color: ${props => props.theme.colors.accent};
  align-items: center;
  justify-content: center;
  border-bottom-width: 6px; 
  border-bottom-color: ${props => props.theme.colors.primary};
  
`;

export const TextButton = styled.Text`
    color: ${props => props.theme.colors.text};
    font-weight: bold;
    font-size: ${props => props.theme.fontSizes.h2};
`