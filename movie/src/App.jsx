import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import MovieCard from '../component/MovieCard';

function App() {
  const movieNumber =1;

  return (
    <>
    
      <MovieCard movie={{title:"lord of the rings",release_date:"2005"}}/>
      <MovieCard movie={{title:"lord of the rings 2",release_date:"2005"}}/>
    </>
  );
}

export default App;