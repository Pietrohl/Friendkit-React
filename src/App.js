import React from 'react';
import './App.sass';
import FadeIn from 'react-fade-in';
import '../src/assets/scss/core.scss';
import '../src/assets/sass/bulma.sass';
import BasicRoutes from './components/Router/index';


function App() {
  return (
    <FadeIn>
      <BasicRoutes />
    </FadeIn>
  );
}

export default App;