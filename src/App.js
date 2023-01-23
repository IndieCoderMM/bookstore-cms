import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import BooksList from './components/BooksList';
import Categories from './components/Categories';

const App = () => (
  <div className="app">
    <Navbar />
    <Routes>
      <Route path="/" element={<BooksList />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
