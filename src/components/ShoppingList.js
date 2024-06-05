import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../features/cartSlice';
import Cart from './Cart'
import PlantItem from './PlantItem'
import Categories from './Categories'
import InfoModal from './InfoModal'
import '../styles/ShoppingList.css'

function ShoppingList() {
	const plantList = useSelector((state) => state.plants.plantList)
	const dispatch = useDispatch()

	const [activeCategories, setActiveCategories] = useState([])
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
	const [modal, setModal] = useState({isVisible:false, name:'', cover:'', info:''})

	function addToCart(name, price) {
		dispatch(addItem({name: name, price: price}))
	}

	return (
		<div className='lmj-layout-inner'>
			<Cart />
			<div className='lmj-shopping-list'>
				<Categories
					categories={categories}
					setActiveCategories={setActiveCategories}
					activeCategories={activeCategories}
				/>

				<ul className='lmj-plant-list'>
					{plantList.map(({ id, cover, name, water, light, price, category, info }) =>
						activeCategories.length === 0 || activeCategories.includes(category) ? (
							<div key={id}>
								<PlantItem
									cover={cover}
									name={name}
									water={water}
									light={light}
									price={price}
								/>
								<button onClick={() => addToCart(name, price)}>Ajouter</button>
								<button onClick={() => setModal({isVisible:true, name:name, cover:cover, info:info})} >Info</button>
							</div>
						) : null
					)} 
				</ul>
				{modal.isVisible && 
					<InfoModal name={modal.name} info={modal.info} cover={modal.cover} setModal={setModal} />
				}
			</div>
		</div>
	)
}

export default ShoppingList
