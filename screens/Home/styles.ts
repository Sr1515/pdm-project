import { theme } from "@/theme";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background}; 
  padding: 24px;
`;

export const Input = styled.TextInput`
  flex: 1; 
  height: 56px;
  background-color: ${props => theme.colors.text};
  border-radius: 5px;
  color: #fff;
  padding: 16px;
  font-size: 16px;
  margin-right: 12px;
`;

export const ButtonSearch = styled.TouchableOpacity`
  width: 56px;  
  height: 56px;
  border-radius: 5px;
  background-color: ${props => theme.colors.text};
  align-items: center;
  justify-content: center;
`;

export const ButtonAdd = styled.TouchableOpacity`
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

export const Button = styled.TouchableOpacity`
  background-color: #e0e0e0;
  padding: 5px;
  border-radius: 50px;
  width: 19px;
  height: 19px;
  justify-content: center;
  align-items: center;
  margin-left: 5px;  
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 32px; 
  text-align: center; 
`;


export const Form = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row; 
  margin-top: 36px;
  margin-bottom: 20px;
  justify-content: space-between;
`;

// lista de produtos 


export const ProductItem = styled.View`
  width: 360px;
  height: 130px;  
  flex-direction: row;
  padding: 15px 10px;  
  background-color: ${props => theme.colors.background};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  align-items: center;
  margin-bottom: 10px;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  margin-right: 10px;
`;

export const ProductInfo = styled.View`
  flex: 1;  
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  color: ${props => theme.colors.text};
`;

export const ProductText = styled.Text`
  font-size: 12px; 
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5px;  
  color: ${props => theme.colors.text};
`;

export const ProductDescription = styled.Text`
  font-size: 10px;  
  color: #666;
  margin-bottom: 0.5px; 
  color: ${props => theme.colors.text};
`;

export const ProductPrice = styled.Text`
  font-size: 12px;  
  font-weight: bold;
  color: #31CF67;
  margin-bottom: 0.5px;  
`;


export const ButtonA = styled.TouchableOpacity`

  padding: 5px;  
  border-radius: 50px;
  width: 19px;  
  height: 19px;  
  justify-content: center; 
  align-items: center;  

`;

export const ButtonTextB = styled.Text`
  font-size: 12px;  
  color: #333;
`;

export const ListEmptyText = styled.Text`
  text-align: center;
  font-size: 16px;
  color: #aaa;
  margin-top: 20px;
`;

export const ButtonContainer = styled.View`
  justify-content: center;
  align-items: flex-end;
  margin-left: 10px;
  flex-direction: column;  
  gap: 8px;  
`;