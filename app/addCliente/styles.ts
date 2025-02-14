import { theme } from "@/theme";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  padding: 26px;
`;

export const ContainerAddClient = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${props => theme.colors.background};
  gap: 30px;
  padding: 10px;
`;

export const ContainerInput = styled.View`
  flex-direction: column;  
  align-items: flex-start; 
  width: 100%;
  margin-bottom: 10px; 
`;

export const InputAddClient = styled.TextInput`
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

export const MapContainer = styled.View`
  width: 100%;
  height: 200px;
  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;
`;

export const ButtonAddContainer = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 20px;
`;

export default { Container, }