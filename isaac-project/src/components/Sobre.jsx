import React, { useState } from "react";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;


  align-items: center;
  justify-content: space-evenly;
  
  height: 150vh;
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



const Left = styled.h1`
 
`;
const Right= styled.h1`

`;


const Description = styled.p`
  font-size: 1.4rem;
  text-align: center;
  max-width: 800px;
  margin-bottom: 2rem;

  color: #b6b6b6;
  font-family: vcsm;

  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  padding-bottom: 20px;
  padding-top: 0px;
  text-align: center;
  text-transform: none;
`;

const Name = styled.h1`
margin-top: 25px;
font-size: 1.4rem;
text-align: center;

margin-bottom: 2rem;

color: #b6b6b6;
font-family: vcsm;

font-style: normal;
font-weight: 400;
line-height: 26px;
padding-bottom: 20px;



`;


const Button= styled.div`
// position: fixed;
// bottom: 20px;
// right: 20px;
// display: none;
// width: 40px;
// height: 40px;
// border-radius: 50%;
// background-color: #333;
// color: #fff;
// text-align: center;
// font-size: 24px;
// line-height: 40px;
// cursor: pointer;
`;



const Sobre = () => {
  const [showName, setShowName] = useState(false);
  const handleMouseEnter = () => {
    setShowName(true);
  };
  const handleMouseLeave = () => {
    setShowName(false);
  };



  return (
    <Container>
      <Left>

      <PhotoContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
          
      <PhotoImage src="/img/sobre.png"  />
    <PhotoName show={showName}> @principedacohab_</PhotoName>
    <PhotoOverlay> </PhotoOverlay>
<PhotoProtection></PhotoProtection>

      <Name>Isaac Eugenio</Name>

      </PhotoContainer>






      </Left>

      <Right>
      <Description>
   

Isaac Eugenio é um talentoso Técnico em Comunicação Visual e Fotógrafo, cujo pseudônimo <bold>"Príncipe da cohab"</bold>  tem se destacado como uma nova mente criativa na cena fotográfica brasileira. Com um estilo autêntico e uma visão singular, ele tem conquistado espaço e admiradores através de seus trabalhos autorais enraizados na moda streetwear.

Através de suas lentes, Isaac traz um olhar contemporâneo e original para a fotografia, capturando momentos únicos e transmitindo emoções de forma inigualável. Seu talento vai além de simplesmente registrar imagens; ele consegue transmitir a essência e a personalidade de seus modelos, tornando cada fotografia uma expressão artística em si mesma.

A criatividade e o profissionalismo de Isaac têm lhe rendido grandes resultados em múltiplas áreas de atuação. Seja na moda, na publicidade ou em projetos pessoais, suas imagens são sempre cativantes e repletas de significado. Ele se destaca por sua habilidade em traduzir suas referências e seu amor pela profissão em cada fotografia que produz.

Ao explorar o universo da moda streetwear, Isaac encontra inspiração nas ruas e nas pessoas comuns, transformando-as em verdadeiros ícones de estilo. Suas imagens capturam a autenticidade e a individualidade de cada pessoa, revelando a beleza e a expressão encontradas no dia a dia.

Além de seu talento indiscutível como fotógrafo, Isaac Eugenio também é reconhecido por sua abordagem profissional e sua dedicação aos projetos que realiza. Sua paixão pela fotografia é evidente em cada detalhe de seu trabalho, e seu comprometimento em entregar resultados excepcionais faz dele um profissional admirado e respeitado em sua área.

Com sua mente criativa e inovadora, Isaac Eugenio é um verdadeiro agente de mudança na fotografia brasileira. Seu trabalho desafia convenções e rompe barreiras, trazendo uma nova perspectiva para o mundo da imagem. Seu talento e sua dedicação são uma inspiração para outros artistas e uma promessa de um futuro brilhante na fotografia.
      </Description>
      </Right>




      <Button class="back-to-top" data-hover-hint="backToTop">
                <a class="nav-link" href="./#hero"><span class="arrow">&uarr;</span><span class="preserve-whitespace"> Voltar</span></a>
              </Button>

    </Container>
  );
};

export default Sobre;