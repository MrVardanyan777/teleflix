import React, { useState } from 'react';
import './genresinglepage.css';
import Pagination from '../../helpers/pagenation/Pagination';
import { TMDB_IMAGE_BASE_URL } from '../../helpers/constat/constant';
import { GetMovieByID } from '../../api';
import { useNavigate } from 'react-router-dom';


const Genresinglepage = ({selectedGenre, genreName, setMovie}) => {
    const [page, setPage] = useState(1);
    const navigate = useNavigate();

    const handleClick = (event) => {
        setPage(+event.target.id)
    }

    async function onClick(event){
        const response = await GetMovieByID(event.target.id);
        setMovie(response);
        navigate(`/movie/details/${event.target.id}`);
      }
    

  return (
    <div className='teleflix__genresingle section__padding'>
        <div className='teleflix__genresingle-heading'>
            <h2>{genreName}</h2>
        </div>        
        <div className='teleflix__genresingle-main'>

        <div className='teleflix__genresingle-movieList'>
            {
                selectedGenre.slice((page - 1) * 4, page * 4).map((element) => {
                    return(
                        <div key={element.id} className='teleflix__recomented-movieList_card'>
                            <div className='teleflix__recomented-movieList_card-img'>
                                <img src={`${TMDB_IMAGE_BASE_URL}${element.poster_path}`} alt='movie' />
                            </div>
                            <div className='teleflix__recomented-movieList_card-content' id={element.id} onClick={onClick}>
                                <h3>{element.title}</h3>
                                <div className='teleflix__recomented-movieList_card-content_info'>
                                    <p></p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>

        <div className='teleflix__genresingle-btns'>
            {
                    Pagination(selectedGenre, page, handleClick)
            }
        </div>

        </div>
    </div>
  )
}

export default Genresinglepage;