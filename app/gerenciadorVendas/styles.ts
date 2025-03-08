import { theme } from "@/theme";
import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native';

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


export const TableContainer = styled.View`
  width: 100%;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
`;


export const TableRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

export const RowText = styled.Text`
  font-size: 16px;
  color: #333;
  flex: 1;
  text-align: center;
`;

export const RowTextList = styled.Text`
  font-size: 16px;
  color: white;
  flex: 1;
  text-align: center;
`;


export const ButtonRemove = styled.TouchableOpacity`
  background-color: #e74c3c;
  padding: 8px 12px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

export const ButtonRemoveText = styled.Text`
  font-size: 14px;
  color: white;
  font-weight: bold;
`;


export const BuyButton = styled.TouchableOpacity`
  background-color: lightgreen;
  padding: 8px;
  border-radius: 5px;
  margin-left: 10px;
`;

export const EmptyText = styled.Text`
  text-align: center;
  margin-top: 20px;
  font-size: ${props => props.theme.fontSizes.h3};
  color: ${props => props.theme.colors.text};
`;


export const ButtonSearch = styled.TouchableOpacity`
  width: 56px;  
  height: 56px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.text};
  align-items: center;
  justify-content: center;
`;



export const TableHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  background-color: #333;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const HeaderText = styled.Text`
  color: white;
  font-weight: bold;
  flex: 1;
  text-align: center;
`;


export const ProductItem = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #444;
`;

export const ActionsContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  flex: 1;
`;

export const RemoveButton = styled.TouchableOpacity`
  background-color: #ff4444;
  padding: 8px;
  border-radius: 5px;
  margin-left: 10px;
`;

export const ListEmptyText = styled.Text`
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
  color: #6B6B6B;
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  width: 90%;
  max-width: 400px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
`;

export const QuantitySelector = styled.View`
  margin-top: 20px;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 8px;
  width: 100%;
`;

export const ButtonContainer = styled.View`
  margin-top: 10px;
  width: 100%;
  align-items: center;
`;

export const ButtonAddFooter = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
  align-items: center;
`;