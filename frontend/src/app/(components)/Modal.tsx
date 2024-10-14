"use client";

import React from "react";
import styled from "styled-components";
import axios from "axios";

interface ModalProps {
  isOpen: boolean;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* Blurred background */
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(8px); /* Blur the background */
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #121826;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  padding: 60px 80px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ModalHeading = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

const SignInButton = styled.button`
  border-radius: 10px;
  background-color: #7c71ff;
  color: #e4e4e7;
  border: none;
  padding: 15px 70px;
  font-weight: 700;

  &:hover {
    background-color: #a99ffb;
  }
`;

const Modal: React.FC<ModalProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  const handleClick = async () => {
    window.location.href = "http://localhost:3000/auth/github";
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeading>Sign In to Continue</ModalHeading>
        <SignInButton onClick={handleClick}>Sign in with Github</SignInButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
