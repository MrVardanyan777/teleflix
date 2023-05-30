import React, { useEffect, useState } from 'react';
import './genreslist.css';
import { MoviesGenresList, GetMoviesByGenre } from '../../api';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.js';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';

const Genreslist = ({ setSelectedGenre, setGenreName }) => {

    const [genreslist, setGenreslist] = useState([]);

    const navigate = useNavigate();

    async function onclick(event) {
        const response = await GetMoviesByGenre(event.target.id);
        setSelectedGenre(response);
        setGenreName(event.target.innerText)
        navigate(`/genre/${event.target.id}`);
    }

    async function getGenresList() {
        const response = await MoviesGenresList();
        setGenreslist(response)
    }

    useEffect(() => {
        getGenresList();
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
                    slidesToShow: 7,
                    slidesToScroll: 7,
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
        <div className='teleflix__genreslist' >
            <div className='teleflix__generlist-list'>
                <Slider {...settings}>
                    {
                        genreslist.map((value) => {
                            return (
                                <button key={value.id} onClick={onclick} id={value.id}>{value.name}</button>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Genreslist