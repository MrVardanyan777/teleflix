import React from 'react';
import './moviedetail.css';
import { TMDB_IMAGE_BASE_URL, TMDB_IMAGE_BASE_URL_BG } from '../../helpers/constat/constant';


const Moviedetail = ({movie}) => {
  return (
    <div className='teleflix__movie-details'>
        <div className='teleflix__movie-details_backdrop'>
            <img src={`${TMDB_IMAGE_BASE_URL_BG}${movie.backdrop_path}`} alt='backfrop' className='teleflix__movie-datail_bg' />
        </div>
    <div className='teleflix__movie-detail_mainpage'>

        <div className='teleflix__movie-details_single'>
            <div className='teleflix__movie-details_single-img'> 
                <img src={`${TMDB_IMAGE_BASE_URL}${movie.poster_path}`} alt='poster' /> 
            </div>

            <div className='teleflex__movie-details_single-content'>

              <div className='teleflex__movie-details_single-content_heading'>
                <h2>{movie.original_title}</h2>
                <p>{movie.overview}</p>
                <p>{movie.release_date}</p>
              </div>

              <div className='teleflex__movie-details_single-content_genres'>
                {
                    movie.genres.map((item) => {
                        return (
                        <div key={item.id} className='teleflex__movie-details_single-content_genres-item'> 
                            <p>{item.name}</p>
                        </div>
                        )
                    })
                }
              </div>
                
            </div>
        </div>
    </div>
    </div>

  )
}

export default Moviedetail;