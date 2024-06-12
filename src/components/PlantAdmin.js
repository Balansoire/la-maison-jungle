import { removePlant, resetPlantList } from "../features/plantSlice"
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import PlantItem from './PlantItem'
import Categories from './Categories'
import EditModal from './EditModal'
import AddPlant from './AddPlant'
import '../styles/ShoppingList.css'


function PlantAdmin() {
    const plantList = useSelector((state) => state.plants.plantList)
	const dispatch = useDispatch()

	const [activeCategories, setActiveCategories] = useState([])
	let categories
	try {
		categories = plantList.reduce(
			(acc, plant) =>
				acc.includes(plant.category) ? acc : acc.concat(plant.category),
			[]
		)
		console.log('categories worked with plantList:');
		console.log(plantList);
	} catch (e) {
		console.log(plantList)
		console.log(e)
		categories = []
	}
	const [modal, setModal] = useState({isVisible:false, name:'', cover:'', info:''})

	function handleRemove(plant) {
		dispatch(removePlant(plant.id))
	}
	function handleReset() {
		dispatch(resetPlantList())
	}

    return (
		<div className="lmj-layout-inner">
			<AddPlant />
			<div className='lmj-shopping-list'>
				<Categories
					categories={categories}
					setActiveCategories={setActiveCategories}
					activeCategories={activeCategories}
				/>

				<ul className='lmj-plant-list'>
					{plantList.map((plant) =>
						activeCategories.length === 0 || activeCategories.includes(plant.category) ? (
							<div key={plant.id}>
								<PlantItem
									cover={plant.cover}
									name={plant.name}
									water={plant.water}
									light={plant.light}
									price={plant.price}
								/>
								<button onClick={() => setModal({isVisible: true, plant: plant})} >Editer</button>
								<button onClick={() => handleRemove(plant)}>Supprimer</button>
							</div>
						) : null
					)} 
				</ul>
				<button onClick={() => handleReset()}>Retour à l'état initial</button>
				{modal.isVisible && 
					<EditModal plant={modal.plant} setModal={setModal} />
				}
			</div>
		</div>
    )
}

export default PlantAdmin