import './index.css'

const PopularMovie = props => {
  const {productData} = props
  const {poster, title} = productData
  return (
    <li className="movie-item">
      <img src={poster} alt={title} className="popular-poster" />
    </li>
  )
}

export default PopularMovie
