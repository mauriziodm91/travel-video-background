import { Link } from 'react-router-dom'
const CardsItem = ({ src, text, label, path }) => {
  return (
    <>
      <li className='cards-item'>
        <Link className='cards-item-link' to={path}>
          <figure className='cards-item-pic-wrap' data-category={label}>
            <img className='cards-item-img' src={src} alt='travel-image' />
          </figure>
          <div className='cards-item-info'>
            <h5 className='cards-item-text'>{text}</h5>
          </div>
        </Link>
      </li>
    </>
  )
}

export default CardsItem
