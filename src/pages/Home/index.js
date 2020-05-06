import React from "react";

import {
  Wrapper,
  Header,
  Balance,
  BalanceContainer,
  BalanceTitle,
  Container,
} from "./styles";

import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import Suggestions from "../../Components/Suggestions";

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={30}
            color="#10c86e"
          />

          <BalanceContainer>
            <BalanceTitle>Meu Saldo</BalanceTitle>
            <Balance>R$ 0,00</Balance>
          </BalanceContainer>

          <AntDesign name="gift" size={30} color="#10c86e" />
        </Header>
        <Suggestions />
      </Container>
    </Wrapper>
  );
}
