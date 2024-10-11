"use client";

import React from "react";
import styles from "./page.module.css";
import styled from "styled-components";

const Title = styled.p`
  font-size: 18px;
  color: #e4e4e7;
  font-weight: 500;
`;

const HistoryContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 16px;
  overflow-y: auto;
`;

const page = () => {
  return (
    <div className={styles.page}>
      <Title>Generation History</Title>
      <HistoryContainer></HistoryContainer>
    </div>
  );
};

export default page;
