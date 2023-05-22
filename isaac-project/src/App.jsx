import React from 'react';
import styled from 'styled-components';
// import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';

import Hero from './components/Hero';
import Sobre from './components/Sobre';

const Container = styled.div`
  height: 100vh;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  background-color: #000000;
  color: whitesmoke;

  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>

    <Hero  id="/hero" />
    <Sobre  id="/sobre"/>
    </Container>
  );
}

export default App;