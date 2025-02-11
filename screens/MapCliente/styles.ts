import { theme } from "@/theme";
import styled from "styled-components/native";
import MapView from 'react-native-maps';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => theme.colors.background};
`;

export const StyledMapView = styled(MapView)`
  margin-left: 20px;
  margin-right: 20px;
  height: 70%;
`;

export const ClientList = styled.View`
  padding: 10px;
`;

export const ClientItem = styled.View`
  background-color: #fff;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ClientName = styled.Text`
  font-size: 16px;
  color: #333;
`;

export const ClientInfo = styled.Text`
  font-size: 14px;
  color: #666;
`;

export const ButtonClientes = styled.View`
  align-items: center; 
  margin-top: 20px; 
`;