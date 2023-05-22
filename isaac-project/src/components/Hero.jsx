import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";

const Container = styled.div`
  display: flex;

  justify-content: space-evelyn;
`;

const PhotoContainer = styled.div`
  position: relative;
  margin: 10px;
  overflow: hidden;
  cursor: pointer;
`;

const PhotoImage = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${PhotoContainer}:hover & {
    transform: scale(1.1);
    filter: grayscale(1);
  }
`;

const PhotoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  font-weight: bold;
  transition: opacity 0.3s ease;
`;

const PhotoProtection = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  pointer-events: none;

  ${PhotoContainer}:hover & {
    opacity: 7;
    pointer-events: all;
  }
`;

const PhotoName = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 0.3s ease;
`;


const Hero = () => {
  const [showName, setShowName] = useState(false);

  const handleMouseEnter = () => {
    setShowName(true);
  };

  const handleMouseLeave = () => {
    setShowName(false);
  };

  return (
    <Container id="hero" className="header_link">
      <Sidebar />
      <div>
       
          <PhotoContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          
              <PhotoImage src=".\img\teste1.png" alt="Foto 1" />
              <PhotoName show={showName}>@spice22girl</PhotoName>
         
            <PhotoOverlay> </PhotoOverlay>

            <PhotoProtection></PhotoProtection>
          </PhotoContainer>
      

          <PhotoContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <PhotoImage src=".\img\sec1.png" alt="Foto 2" />
            <PhotoOverlay></PhotoOverlay>
            <PhotoName show={showName}>@principedacohab_</PhotoName>
            <PhotoProtection></PhotoProtection>
          </PhotoContainer>{" "}
        

        <PhotoContainer>
          <PhotoImage src=".\img\test1.png" alt="Foto 3" />
          <PhotoName show={showName}>principedacohab_</PhotoName>
          <PhotoOverlay> </PhotoOverlay>
          <PhotoProtection></PhotoProtection>
        </PhotoContainer>

        <PhotoContainer>
          <PhotoImage src=".\img\test3.png" alt="Foto 3" />
          <PhotoOverlay></PhotoOverlay>
          <PhotoProtection></PhotoProtection>
        </PhotoContainer>
      </div>
      <div>
        <PhotoContainer>
          <PhotoImage src=".\img\teste2.png" alt="Foto 1" />
          <PhotoOverlay></PhotoOverlay>
          <PhotoProtection></PhotoProtection>
        </PhotoContainer>
        <PhotoContainer>
          <PhotoImage src=".\img\sec2.png" alt="Foto 2" />
          <PhotoOverlay></PhotoOverlay>
          <PhotoProtection></PhotoProtection>
        </PhotoContainer>

        <PhotoContainer>
          <PhotoImage src=".\img\test2.png" alt="Foto 3" />
          <PhotoOverlay></PhotoOverlay>
          <PhotoProtection></PhotoProtection>
        </PhotoContainer>

        <PhotoContainer>
          <PhotoImage src=".\img\test3.png" alt="Foto 3" />
          <PhotoOverlay></PhotoOverlay>
          <PhotoProtection></PhotoProtection>
        </PhotoContainer>
      </div>

      <div>
        <PhotoContainer>
          <PhotoImage src=".\img\teste3.png" alt="Foto 1" />
          <PhotoOverlay></PhotoOverlay>
          <PhotoProtection></PhotoProtection>
        </PhotoContainer>
        <PhotoContainer>
          <PhotoImage src=".\img\sec3.png" alt="Foto 2" />
          <PhotoOverlay></PhotoOverlay>
          <PhotoProtection></PhotoProtection>
        </PhotoContainer>

        <PhotoContainer>
          <PhotoImage src=".\img\test3.png" alt="Foto 3" />
          <PhotoOverlay></PhotoOverlay>
          <PhotoProtection></PhotoProtection>
        </PhotoContainer>

        <PhotoContainer>
          <PhotoImage src=".\img\test3.png" alt="Foto 3" />
          <PhotoOverlay></PhotoOverlay>
          <PhotoProtection></PhotoProtection>
        </PhotoContainer>
      </div>

      {/* Adicione mais fotos conforme necessário */}
    </Container>
  );
};

export default Hero;
