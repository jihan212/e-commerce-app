import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'
import Homescreen from './screen/Homescreen'
import Productscreen from './screen/Productscreen'

const App = () => {
  return (
    <Router>
      <Header></Header>
      <main className='py-3'>
        <Container>
          <Route exact path='/'>
            <Homescreen />
          </Route>

          <Route path='/products/:id'>
            <Productscreen />
          </Route>
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  )
}

export default App
