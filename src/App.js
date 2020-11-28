import React from 'react';
import './App.sass';
import FadeIn from 'react-fade-in';
import '../src/assets/scss/core.scss';
import '../src/assets/sass/bulma.sass';
import './assets/css/app.css';
import './assets/css/app.css.map';
import './assets/css/bulma.css';
import './assets/css/core.css';
import BasicRoutes from './components/Router/index';


function App() {
  return (
    <FadeIn>
      <BasicRoutes />
    </FadeIn>
  );
}

export default App;