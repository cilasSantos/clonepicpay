import React from "react";

import { Feather, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import {
  Container,
  Header,
  Title,
  CardHeader,
  Card,
  Description,
  Bold,
  Avatar,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from "./styles";

import avatar from "../../assets/images/avatar.png";

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>
      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou <Bold>@zedasilva</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>Zé da Silva</UserName>
        </CardBody>
        <CardFooter>
          <Details>
            <Value>R$ 00,00</Value>

            <Divider />

            <Date>
              <Feather size={14} name="lock" color="#fff" />
              há 2 anos
            </Date>
          </Details>

          <Actions>
            <Option>
              <MaterialCommunityIcons
                name="comment-outline"
                size={14}
                color="#fff"
              />
              <OptionLabel>0</OptionLabel>
            </Option>
            <Option>
              <AntDesign name="hearto" size={14} color="#fff" />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}
