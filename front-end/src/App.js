import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <>
    <Header></Header>
    <main>
      <Container>
        <h1>Heloo</h1>
      </Container>
    </main>
    <Footer></Footer>
    </>
  );
}

export default App;
