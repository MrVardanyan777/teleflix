import React from 'react';
import './recomendation.css';
import { Genreslist, PopularMovies, Recomented } from '../../components';


const Recomendation = ({setSelectedGenre, setGenreName, setMovie}) => {
  return (
    <div className='teleflix__recomendation section__padding'>
        <Genreslist setSelectedGenre={setSelectedGenre} setGenreName={setGenreName}/>
        <Recomented setMovie={setMovie} />
        <PopularMovies setMovie={setMovie} />
    </div>
  )
}

export default Recomendation;