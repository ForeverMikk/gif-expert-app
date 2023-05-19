import PropTypes from 'prop-types';

const GifItem = ({title, url}) => {
  return (
    <li className='card'>
        <p>{title}</p>
        <img src={url} alt={title} />
    </li>
  )
}

GifItem.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string
}

export default GifItem;