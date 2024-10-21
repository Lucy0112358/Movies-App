import { useSelector } from 'react-redux';
import MovieSlider from '../../components/slider/MovieSlider';
import { getSelectedMovie } from '../../redux/slice/movieSlice';
import { selectIsSidebarHovered } from '../../redux/slice/uiSlice';
import { useState } from 'react';
import '../../components/sidebar/sidebar.css';
import './home.css'

const Home = () => {
    const selectedMovie = useSelector(getSelectedMovie);
    const [isVideoBackground, setIsVideoBackground] = useState(false);
    const isSidebarHovered = useSelector(selectIsSidebarHovered);


    return (
        <div className="flex flex-col md:flex-row items-start bg-black text-white home-container">
            <div className='w-full'>
                <div className="relative h-[80vh] bg-black text-white"
                    style={{ opacity: isSidebarHovered ? 0.6 : 1, transition: 'opacity 0.5s ease-in-out' }}>

                    {isVideoBackground ? (
                        <iframe
                            className="absolute inset-0 w-full h-full object-cover"
                            src="https://www.youtube.com/embed/aDdOnl0bHO4?autoplay=1&loop=1&playlist=aDdOnl0bHO4&mute=1"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="autoplay; loop; muted"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <img
                            src={process.env.REACT_APP_MOVIE_SLIDER_PATH + selectedMovie.BackgroundImage}
                            alt={selectedMovie.Title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>

                    <div className="relative z-10 max-w-2xl p-6 md:p-12 space-y-4">
                        <h4 className="text-gray-400 uppercase text-sm">{selectedMovie.Category}</h4>
                        <h1 className="text-4xl md:text-6xl font-bold">{selectedMovie.Title}</h1>
                        <p className="text-gray-300">{selectedMovie.ReleaseYear} | 18+ | 1h 48m</p>
                        <p className="text-gray-400">{selectedMovie.Description}</p>

                        <div className="space-x-4">
                            <button className="button button-play">
                                <span className="play-icon">▶</span> Play
                            </button>
                            <button className="button button-info">
                                More Info
                            </button>
                        </div>
                    </div>
                </div>
                <MovieSlider setIsVideoBackground={setIsVideoBackground} />
            </div>
        </div>
    );
};

export default Home;
