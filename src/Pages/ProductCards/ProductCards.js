import React from "react";
import styled from "styled-components";
import Product from "../Product/Product";
import { productsData } from "../ProductsData/ProductsData";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProductCards = () => {
  return (
    <Container>
      {productsData.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </Container>
  );
};

export default ProductCards;
