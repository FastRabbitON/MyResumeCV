
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';

import Resume from './Resume';

import Translator from './Projects/TranslatorPJM/TranslatorPJM'
import Weather from './Projects/WeatherApp/WeatherApp'
import Legal from './Projects/LegalFly/LegalFLY'


export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Resume />} />

        <Route path="/translator" element={<Translator />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/legalfly" element={<Legal />} />

      </Routes>

    </BrowserRouter>

  );

};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


