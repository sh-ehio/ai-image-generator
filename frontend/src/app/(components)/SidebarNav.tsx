"use client";
import React from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import MagicIconImg from "../../../public/assets/Magic.svg";
import LogoIconImg from "../../../public/assets/Logo.svg";
import AppsIconImg from "../../../public/assets/apps.svg";
import TimeAttackIconImg from "../../../public/assets/Time_atack_duotone.svg";
import FolderIconImg from "../../../public/assets/Folder_duotone_fill.svg";
import SignoutIconImg from "../../../public/assets/signout.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  padding: 16px;
  gap: 20px;
  height: 100%;
  background-color: #121826;
  border-right: 0.5px solid #212936;
  justify-content: space-between;
`;

const InteractionHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  justify-self: flex-start;
`;

const UpperNavbarSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavItem = styled(Link)<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  ${({ active }) =>
    active &&
    css`
      background-color: #7c71ff; /* Custom background color for active item */
    `}
  &:hover {
    background-color: #655cc4;
  }
`;

const SidebarNav = () => {
  const pathname = usePathname();
  return (
    <Navbar>
      <UpperNavbarSection>
        <Image
          src={LogoIconImg}
          alt="Icon picturing the logo of the application"
          style={{ marginBottom: "50px" }}
        ></Image>
        <InteractionHolder>
          <NavItem href="/" active={pathname === "/"}>
            <Image
              src={MagicIconImg}
              alt="Icon picturing two little stars"
            ></Image>
          </NavItem>
          <NavItem href="/feed" active={pathname === "/apps"}>
            <Image
              src={AppsIconImg}
              alt="Icon picturing 4 little squares one of them being white and the other ones grey"
            ></Image>
          </NavItem>
          <NavItem href="/time" active={pathname === "/time"}>
            <Image
              src={TimeAttackIconImg}
              alt="Icon picturing a circle with 3/4 of the circle filled in"
            ></Image>
          </NavItem>
          <NavItem href="/folder" active={pathname === "/folder"}>
            <Image src={FolderIconImg} alt="Icon picturing a folder"></Image>
          </NavItem>
        </InteractionHolder>
      </UpperNavbarSection>
      <NavItem href="/signout" active={pathname === "/signout"}>
        <Image
          src={SignoutIconImg}
          alt="Icon picturing a square with an arrow pointing out of it to the right side"
        ></Image>
      </NavItem>
    </Navbar>
  );
};

export default SidebarNav;
