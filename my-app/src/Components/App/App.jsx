import React from 'react';
import Reader from '../publicationsReader/Reader/Reader';
import MoviePage from '../movies/MoviePage/MoviePage';
import Dashboard from '../bank-account/Dashboard/Dashboard';

import './App.css';

function App() {
  return (
    <div>
      <Reader />
      <MoviePage />
      <Dashboard />
    </div>
  );
}

export default App;
