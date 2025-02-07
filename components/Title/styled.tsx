import styled from "styled-components/native";

export const TitleContainer = styled.Text`
    background-color: ${props => props.theme.colors.background};
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center; 
    margin-bottom: 20px;
    text-align: center;
    color:  ${props => props.theme.colors.text};
    font-size: ${props => props.theme.fontSizes.h1};
    font-weight: bold; 
`