import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Genresinglepage, Homepage, Moviedetail, Recomendation } from './pages';
import { Navbar } from './components';


function App() {

  const [selectedGenre, setSelectedGenre] = useState(null);
  const [genreName, setGenreName] = useState('');
  const [movie, setMovie] = useState(null);


  return (
    <>
      <Navbar/>
      <Routes>
        <Route 
            exact
            path='/'
            element={
              <Homepage
              />
            }
        />
        <Route 
            path='/recomendation'
            element={
              <Recomendation  
              setSelectedGenre={setSelectedGenre}
              setGenreName={setGenreName}
              setMovie={setMovie}
              />
            }
        />
        <Route 
          path='/genre/:id'
          element={
            <Genresinglepage
              selectedGenre={selectedGenre}
              genreName={genreName}
              setMovie={setMovie}
             />
          }
        />
        <Route 
          path='/movie/details/:id'
          element={
            <Moviedetail 
              movie={movie}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
