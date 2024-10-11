"use client";

import { useState } from "react";
import styles from "./page.module.css";
import styled from "styled-components";
import StarIconImgSrc from "../../public/assets/Magic.svg";
import PlaceholderImgSrc from "../../public/assets/Box-shape.png";
import Image from "next/image";

const InputFieldHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const TextAreaInput = styled.textarea`
  resize: none;
  border: none;
  border-radius: 10px;
  background-color: #212936;
  outline: none;
  padding: 10px;
  color: #6c727f;
`;

const TextInput = styled.input`
  border: none;
  border-radius: 10px;
  background-color: #212936;
  outline: none;
  padding: 10px;
  color: #6c727f;
`;

const Label = styled.label`
  font-size: 12px;
  color: #6c727f;
  font-weight: 600;
`;

const InputElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ColorOptionHolder = styled.div`
  display: flex;
  gap: 12px;
`;

const CircleButton = styled.button<{ $color?: string }>`
  height: 31px;
  width: 32px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.$color};

  &:hover {
    filter: brightness(1.2);
  }
`;

const ResolutionHolder = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: repeat(auto, 1fr);
  gap: 10px;
`;

const ResolutionButton = styled.button<{ $selected?: boolean }>`
  background-color: ${(props) => (props.$selected ? "#7C71FF" : "#212936")};
  color: #e4e4e7;
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 12px;
  border: none;

  &:hover {
    filter: brightness(1.2);
  }
`;

const GenerateButton = styled.button`
  background-color: #7c71ff;
  border-radius: 10px;
  border: none;
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(1.2);
  }
`;

const ButtonText = styled.p`
  font-size: 14px;
  font-weight: 700;
`;

const ButtonInfoHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const GeneratedImageHolder = styled.div`
  max-width: 525px;
  max-height: 525px;
  width: 100%;
  height: 100%;
  background-color: #212936;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const PlaceholderImage = styled(Image)`
  max-height: 50%;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  z-index: 99999;
`;

export default function Home() {
  const [selectedResolution, setSelectedResolution] = useState("");

  const handleResolutionClick = (resolution: string) => {
    setSelectedResolution(resolution);
  };

  return (
    <div className={styles.page}>
      <InputFieldHolder>
        <InputElementContainer>
          <Label htmlFor="prompt">Prompt</Label>
          <TextAreaInput
            placeholder="Enter the prompt"
            name="prompt"
            id="prompt"
            rows={5}
            cols={33}
            required
          ></TextAreaInput>
        </InputElementContainer>
        <InputElementContainer>
          <Label htmlFor="negative_prompt">Negative Prompt (Optional)</Label>
          <TextInput
            name="negative_prompt"
            id="negative_prompt"
            placeholder="Enter the prompt"
          ></TextInput>
        </InputElementContainer>
        <InputElementContainer>
          <Label htmlFor="colors">Colors</Label>
          <ColorOptionHolder id="colors">
            <CircleButton $color="#DD524C"></CircleButton>
            <CircleButton $color="#E87B35"></CircleButton>
            <CircleButton $color="#5EC269"></CircleButton>
            <CircleButton $color="#4E80EE"></CircleButton>
            <CircleButton $color="#9D59EF"></CircleButton>
            <CircleButton $color="#E4E4E7"></CircleButton>
          </ColorOptionHolder>
        </InputElementContainer>
        <InputElementContainer>
          <Label htmlFor="resolutions">Resolution</Label>
          <ResolutionHolder id="resolutions">
            <ResolutionButton
              $selected={selectedResolution === "1024x1024"}
              onClick={() => handleResolutionClick("1024x1024")}
            >
              1024 x 1024 (1:1)
            </ResolutionButton>
            <ResolutionButton
              $selected={selectedResolution === "1152x896"}
              onClick={() => handleResolutionClick("1152x896")}
            >
              1152 x 896 (9:7)
            </ResolutionButton>
            <ResolutionButton
              $selected={selectedResolution === "896x1152"}
              onClick={() => handleResolutionClick("896x1152")}
            >
              896 x 1152 (7:9)
            </ResolutionButton>
            <ResolutionButton
              $selected={selectedResolution === "1344x768"}
              onClick={() => handleResolutionClick("1344x768")}
            >
              1344 x 768 (7:4)
            </ResolutionButton>
            <ResolutionButton
              $selected={selectedResolution === "768x1344"}
              onClick={() => handleResolutionClick("768x1344")}
            >
              768 x 1344 (4:7)
            </ResolutionButton>
          </ResolutionHolder>
        </InputElementContainer>
        <InputElementContainer>
          <GenerateButton>
            <ButtonInfoHolder>
              <Image src={StarIconImgSrc} alt="twinkling stars icon"></Image>
              <ButtonText>Generate Image</ButtonText>
            </ButtonInfoHolder>
          </GenerateButton>
        </InputElementContainer>
      </InputFieldHolder>
      <GeneratedImageHolder>
        <PlaceholderImage
          src={PlaceholderImgSrc}
          alt="Placeholder Generation Image"
        />
      </GeneratedImageHolder>
    </div>
  );
}
