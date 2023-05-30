import React, { useEffect, useState } from 'react';
import './recomented.css';
import { SuggestedMoviesList } from '../../api';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.js';
import Slider from 'react-slick';
import { TMDB_IMAGE_BASE_URL } from '../../helpers/constat/constant';
import { GetMovieByID } from '../../api';
import { useNavigate } from 'react-router-dom';


const Recomented = ({setMovie}) => {

  const [moviesList, setMoviesList] = useState([]);
  const navigate = useNavigate();  
  
  
  async function GetRecomentedMovies(){
    const response = await SuggestedMoviesList();
    setMoviesList(response);
  }


  async function handleClick(event){
    const response = await GetMovieByID(event.target.id);
    setMovie(response);
    navigate(`/movie/details/${event.target.id}`);
  }



  useEffect(() => {
    GetRecomentedMovies();
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: <></>, 
    nextArrow: <></>, 
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            },
        },
        {
            breakpoint: 1000, 
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            }
        }, 
        {
            breakpoint: 900, 
            settings: {
                slidesToShow: 4, 
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 800, 
            settings: {
                slidesToShow: 3, 
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ],
}

  return (
    <div className='teleflix__recomented'>
        <div className='teleflix__recomented-heading'>
            <h2>Recomented</h2>
        </div>
        <div className='teleflix__recomented-movieList'>
        <Slider {...settings}>
            {
                moviesList.map((value) => {
                    return (
                        <div key={value.id} className='teleflix__recomented-movieList_card'>
                            <div className='teleflix__recomented-movieList_card-img'>
                                <img src={`${TMDB_IMAGE_BASE_URL}${value.poster_path}`} alt='movie' />
                            </div>
                            <div className='teleflix__recomented-movieList_card-content' id={value.id} onClick={handleClick}>
                                <h3>{value.title}</h3>
                                <div className='teleflix__recomented-movieList_card-content_info'>
                                    <p></p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </Slider>
        </div>
    </div>
  )
}

export default Recomented;