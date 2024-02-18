import Slider from 'react-slick'
import './index.css'

const MoviesSlider = props => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }
  const {productData} = props

  return (
    <>
      <Slider {...settings}>
        {productData.map(eachLogo => {
          const {id, poster, title} = eachLogo
          return (
            <div className="slick-item" key={id}>
              <img className="logo-image" src={poster} alt={title} />
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default MoviesSlider
