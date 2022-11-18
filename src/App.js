import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Books from './components/books';
import Categories from './components/categories';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
