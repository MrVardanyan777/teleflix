import React, { useState, useEffect } from 'react'; 
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Imageslider = ({duration}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const SliderImagesData = [
        `https://r4.wallpaperflare.com/wallpaper/624/721/234/movie-poster-aliens-sigourney-weaver-h-r-giger-wallpaper-1142e5eae13e031849211c08aa022dfc.jpg`,
        `https://r4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-6d0eac9ad7ff001ab6ec6bd12c975f60.jpg`,
        `https://r4.wallpaperflare.com/wallpaper/852/644/1008/alien-movie-poster-sigourney-weaver-movie-poster-wallpaper-a3a752b029ebcc7e8879c13bde97f5ff.jpg`,
        `https://r4.wallpaperflare.com/wallpaper/71/805/151/movie-cap-pikachu-poster-pokemon-hd-wallpaper-234a53ea98055c2d18527e7321f83251.jpg`,
        `https://r4.wallpaperflare.com/wallpaper/462/216/45/movies-dark-wednesday-addams-wednesday-tv-series-movie-poster-hd-wallpaper-e2fa991ee3443c2835e2fa45630146e6.jpg`, 
        `https://r4.wallpaperflare.com/wallpaper/649/1012/960/john-wick-movie-poster-wallpaper-a26baa3532ae19f20df6a8f69166fd0b.jpg`
    ]

    const incrementIndex = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === SliderImagesData.length - 1 ? 0 : prevIndex + 1
        );
    };
    useEffect(() => {
        // Automatically increment the index every 3 seconds
        const interval = setInterval(incrementIndex, duration);
    
        return () => {
          // Clean up the interval on component unmount
          clearInterval(interval);
        };
      }, []);

  return (
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        showIndicators={false}
        infiniteLoop
        selectedItem={currentIndex}
        onChange={setCurrentIndex}
      >
        {SliderImagesData.map((imageUrl, index) => (
          <div key={index} style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '20rem', borderRadius: '10px' }}>
          </div>
        ))}
      </Carousel>
    )
}

export default Imageslider;