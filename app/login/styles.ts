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

export const TextContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const TextAbout = styled.Text`
    font-size: ${props => props.theme.fontSizes.h3};
    color: ${props => props.theme.colors.text}
`;

export const TextRedirect = styled.Text`
    font-size: ${props => props.theme.fontSizes.h3};
    color: ${props => props.theme.colors.accent};
`;
