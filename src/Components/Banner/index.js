import React from "react";

import { Container, Ditails, Img, Title, Description } from "./styles";

import img13 from "../../assets/images/13.png";

export default function Banner() {
  return (
    <Container>
      <Ditails>
        <Title>Cobre um amigo.</Title>
        <Description>
          Mantenha suas parcerias em dia, use o PicPay para fazer suas
          cobranças.
        </Description>
      </Ditails>
      <Img source={img13} />
    </Container>
  );
}
