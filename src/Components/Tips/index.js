import React from "react";

import { Container, Option, Img, Title } from "./styles";

import img8 from "../../assets/images/08.png";
import img9 from "../../assets/images/09.png";
import img10 from "../../assets/images/10.png";
import img11 from "../../assets/images/11.png";
import img12 from "../../assets/images/12.png";

const items = [
  {
    key: String(Math.random()),
    img: img8,
    title: "Pague suas contas sem sair de casa.",
    color: "#172c4a",
  },
  {
    key: String(Math.random()),
    img: img9,
    title: "Pague suas contas sem sair de casa.",
    color: "#6a0159",
  },
  {
    key: String(Math.random()),
    img: img10,
    title: "Pague suas contas sem sair de casa.",
    color: "#4139c9c8",
  },
  {
    key: String(Math.random()),
    img: img11,
    title: "Pague suas contas sem sair de casa.",
    color: "#00ab4b",
  },
  {
    key: String(Math.random()),
    img: img12,
    title: "Pague suas contas sem sair de casa.",
    color: "#ba2f76",
  },
];

export default function Tips() {
  return (
    <Container>
      {items.map((item) => (
        <Option key={item.key} bgColor={item.color}>
          <Title>{item.title}</Title>

          <Img source={item.img} />
        </Option>
      ))}
    </Container>
  );
}
