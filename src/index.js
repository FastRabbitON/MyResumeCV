
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';

import Resume from './ResumeWeb';

import Translator from './TranslatorPJM'
import Weather from './WeatherApp'
import Legal from './LegalFLY'

import Test from "./TestFHUJ"

export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Resume />} />

        <Route path="/sprawdzam" element={<Test />} />

        <Route path="/translator" element={<Translator />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/legalfly" element={<Legal />} />

      </Routes>

    </BrowserRouter>

  );

};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


