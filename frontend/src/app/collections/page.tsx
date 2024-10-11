"use client";

import React from "react";
import styles from "./page.module.css";
import styled from "styled-components";

const Title = styled.p`
  font-size: 18px;
  color: #e4e4e7;
  font-weight: 500;
`;

const page = () => {
  return (
    <div className={styles.page}>
      <Title>My Collection</Title>
    </div>
  );
};

export default page;
