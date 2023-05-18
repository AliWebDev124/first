import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import './App.scss';

const App = () => (
  <div className="app">

    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
  </div>
);

export default App;