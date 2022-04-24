import React from "react";
import styled from "styled-components";
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  margin: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  min-width: 280px;
  height: 350px;
  background: #f5fbfd;
  border-radius: 6px;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
`;
const Img = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  transition: all 0.3s ease;

  &:hover {
    background: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = (product) => {
  //   console.log(product.product);
  return (
    <Container>
      <Circle />
      <Img src={product.product.img} />
      <Info>
        <Icon>
          <i className="fa-solid fa-cart-shopping"></i>
        </Icon>
        <Icon>
          <i className="fa-solid fa-magnifying-glass"></i>
        </Icon>
        <Icon>
          <i className="fa-solid fa-heart"></i>
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
