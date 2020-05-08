import React, { useState } from "react";
import { Switch } from "react-native";

import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";

import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  Label,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardDitails,
  CardTitle,
  CardInfo,
  Img,
  CardBody,
  CardFooter,
  CardButton,
  LabelButton,
  TicketContainer,
  TicketButton,
  TicketLabel,
} from "./styles";

import creditCard from "../../assets/images/credit-card.png";

export default function Wallet() {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  function handleToggleVisibilily() {
    setIsVisible((prevState) => !prevState);
  }

  function handleToggleUseBalance() {
    setUseBalance((prevState) => !prevState);
  }

  return (
    <Wrapper>
      <Header
        colors={useBalance ? ["#52e78c", "#1ab563"] : ["#D3D3D3", "#868686"]}
      >
        <HeaderContainer>
          <Title>Saldo PicPay</Title>

          <BalanceContainer>
            <Value>
              R$ <Bold>{isVisible ? "0,00" : "-----"}</Bold>
            </Value>
            <EyeButton onPress={handleToggleVisibilily}>
              <Feather
                color="#fff"
                name={isVisible ? "eye" : "eye-off"}
                size={28}
              />
            </EyeButton>
          </BalanceContainer>
          <Info>Seu saldo esta rendendo 100% do CDI.</Info>
          <Actions>
            <Action>
              <MaterialCommunityIcons color="#fff" name="cash" size={30} />
              <Label>Adicionar</Label>
            </Action>
            <Action>
              <FontAwesome color="#fff" name="bank" size={22} />
              <Label>Banco</Label>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>

      <UseBalance>
        <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>

        <Switch value={useBalance} onValueChange={handleToggleUseBalance} />
      </UseBalance>
      <PaymentMethods>
        <PaymentMethodsTitle>Formas de pagamentos</PaymentMethodsTitle>
        <Card>
          <CardBody>
            <CardDitails>
              <CardTitle>Cadastre seu cartão</CardTitle>
              <CardInfo>
                Cadastre seu cartão de credito para poder fazer pagamentos mesmo
                quando não tiver saldo no PicPay.
              </CardInfo>
            </CardDitails>
            <Img resizeMode="contain" source={creditCard} />
          </CardBody>
          <CardFooter>
            <CardButton>
              <AntDesign name="pluscircleo" color="#0db060" size={25} />
              <LabelButton>Adicionar cartão de crédito</LabelButton>
            </CardButton>
          </CardFooter>
        </Card>
        <TicketContainer>
          <TicketButton>
            <MaterialCommunityIcons
              name="ticket-outline"
              color="#0db060"
              size={20}
            />
            <TicketLabel>Usar código promocional</TicketLabel>
          </TicketButton>
        </TicketContainer>
      </PaymentMethods>
    </Wrapper>
  );
}
