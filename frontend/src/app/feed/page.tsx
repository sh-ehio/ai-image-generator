"use client";

import React from "react";
import styles from "./page.module.css";
import styled from "styled-components";
import SearchIconImgSrc from "../../../public/assets/Search.svg";
import Image from "next/image";

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #212936;
  width: 50%;
  border-radius: 10px;
  padding: 12px;
`;

const SearchBarInput = styled.input`
  border: none;
  color: #6c727f;
  font-size: 12px;
  font-weight: 600;
  background-color: #121826;
  outline: none;
  width: 100%;
`;

const page = () => {
  return (
    <div className={styles.page}>
      <SearchBarContainer>
        <SearchBarInput placeholder="Search images by keywords"></SearchBarInput>
        <Image src={SearchIconImgSrc} alt="Search Icon"></Image>
      </SearchBarContainer>
    </div>
  );
};

export default page;
