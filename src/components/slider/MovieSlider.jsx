import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './slider.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovie, setInitialList, setSelectedId } from '../../redux/slice/movieSlice';
import { useEffect } from 'react';

const MovieSlider = ({ setIsVideoBackground }) => {
  const dispatch = useDispatch(setSelectedId())

  const movieSlides = useSelector(getAllMovie)
  useEffect(() => {
    dispatch(setInitialList());
  }, []);

  const setSlide = (slide) => {
    setIsVideoBackground(false);
    let id = slide.Id
    const storedIds = sessionStorage.getItem('lastSelectedIds');
    let lastSelectedIds = storedIds ? JSON.parse(storedIds) : [];
    lastSelectedIds = lastSelectedIds.filter((item) => item !== id);
    lastSelectedIds.unshift(id);
    sessionStorage.setItem('lastSelectedIds', JSON.stringify(lastSelectedIds));

    setTimeout(() => {
      setIsVideoBackground(true);
    }, 2000);

    dispatch(setSelectedId(slide))
  };

  return (
    <Swiper
      slidesPerView={8}
      loop={true}
      pagination={{ clickable: true }}
      navigation
    >
      {movieSlides.map((slide) => (
        <SwiperSlide key={slide.Id} className="w-auto object-cover" >
          <img className='slider_image'
            onClick={() => (setSlide(slide))}
            src={process.env.REACT_APP_MOVIE_SLIDER_PATH + slide.CoverImage}
            alt={slide.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MovieSlider;
