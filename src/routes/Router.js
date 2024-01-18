import React from 'react';
import { Routes, Route } from 'react-router-dom';
// pages 
import Home from '../pages/home-page/Home';
import About from '../pages/about-page/About';
import Gallery from '../pages/gallery-page/Gallery';
import Contact from '../pages/contact-page/Contact';
import Error from '../pages/error-page/NotFound';
import Header from '../components/header/Header';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/Footer/Footer';

const Router = () => {  
    return (
      <>
        <Header />
        <Navigation />

        <main className={`main`}>
          <article className='article'>
            <Routes>
              {/* routes */}
              <Route index path='/' element={ <Home /> } />
              <Route path='/o-nama' element={ <About /> } />
              <Route path='/galerija-radova' element={ <Gallery /> } />
              <Route path='/kontakt' element={ <Contact /> } />
              {/* catch all */}
              <Route path={'*'} element={ <Error /> } />
            </Routes>
          </article>
        </main>

        <Footer />
      </>
    )
  }
  
  export default Router;