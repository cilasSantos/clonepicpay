import styled from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #000;
`;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BalanceContainer = styled.View`
  align-items: center;
`;

export const BalanceTitle = styled.Text`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
`;

export const Balance = styled.Text`
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;

export const Container = styled.ScrollView``;
