import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Books from './components/books';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
      </Routes>
    </div>
  );
}

export default App;
