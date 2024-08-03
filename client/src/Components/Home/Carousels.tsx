import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { bannerData } from '../../constants/data';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Carousels = () => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      // showDots={true}
      responsive={responsive}
      // ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      // customTransition="all .5"
      // transitionDuration={500}
      // containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      // deviceType={}
      // dotListClass="custom-dot-list-style"
      // itemClass="carousel-item-padding-40-px"
      className="mt-4"
    >
      {bannerData.map((data) => (
        <img
          src={data.url}
          alt="banner"
          key={data.id}
          className="w-full h-72"
        />
      ))}
    </Carousel>
  );
};
export default Carousels;
