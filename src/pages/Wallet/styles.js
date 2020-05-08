import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Wrapper = styled.View`
  background: #000;
  flex: 1;
`;

export const Header = styled(LinearGradient)`
  height: 250px;
`;

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const BalanceContainer = styled.View`
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  color: #fff;
  font-size: 38px;
  font-weight: 200;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const EyeButton = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const Info = styled(Title)`
  font-size: 14px;
`;

export const Actions = styled.View`
  flex-direction: row;
  margin-top: 30px;
`;
export const Action = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 25px;
  height: 40px;
  width: 150px;
`;
export const Label = styled.Text`
  color: #fff;
  margin-left: 10px;
  font-size: 18px;
`;

export const UseBalance = styled.View`
  color: #fff;
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #1c1c1e;
  padding: 0 10px;
`;

export const UseBalanceTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

export const PaymentMethods = styled.View`
  margin-top: 25px;
  padding: 0 16px;
  height: 300px;
`;

export const PaymentMethodsTitle = styled.Text`
  color: #8e8e93;
  text-transform: uppercase;
`;

export const Card = styled.View`
  background: #1e232a;
`;

export const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const CardInfo = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  margin-top: 15px;
`;

export const CardDitails = styled.View`
  flex: 1;
`;

export const Img = styled.Image`
  width: 60px;
`;

export const CardBody = styled.View`
  border-radius: 8px;
  margin-top: 10px;
  padding: 15px;
  flex-direction: row;
`;

export const CardFooter = styled.View`
  padding: 10px;
`;

export const CardButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const LabelButton = styled.Text`
  color: #0db060;
  font-size: 23px;
  font-weight: 500;
  margin-left: 10px;
`;

export const TicketContainer = styled.View`
  margin-top: 20px;
`;

export const TicketButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TicketLabel = styled.Text`
  color: #0db060;
  margin-left: 10px;
  text-decoration-line: underline;
  font-size: 16px;
  font-weight: bold;
`;
