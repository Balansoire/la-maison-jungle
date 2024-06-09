import PropTypes from 'prop-types';
import CareScale from './CareScale'
import '../styles/PlantItem.css'

function PlantItem({ cover, name, water, light, price}) {
	return (
		<li className='lmj-plant-item'>
			<span className='lmj-plant-item-price'>{price}€</span>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

PlantItem.propTypes = {
	cover: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	water: PropTypes.number.isRequired,
	light: PropTypes.number.isRequired,
	price: PropTypes.number.isRequired
}

export default PlantItem
