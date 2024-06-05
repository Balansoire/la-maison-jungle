import { useState } from 'react'
import { addPlant } from "../features/plantSlice";
import { useDispatch } from 'react-redux'
import '../styles/Cart.css'


function AddPlant() {
    const dispatch = useDispatch()
    const inputPlant = {
        name: '',
        category: '',
        id: '',
        light: '',
        water: '',
        cover: '',
        price: '',
        info: ''
    }
    const [isOpen, setIsOpen] = useState(true)

    function handleInput(key, value) {
        inputPlant[key] = value
        console.log(inputPlant)
    }
    function plantNotValid(plant) {
        return plant.name === '' || plant.category === '' || plant.id === '' || plant.light === '' || plant.water === '' || plant.cover === '' || plant.price === '' || plant.info === ''
    }
    function handleAddPlant() {
        if(plantNotValid(inputPlant)) {
            alert('Plante non valide')
            return
        }
        console.log(inputPlant)
        dispatch(addPlant(inputPlant))
    }

    return isOpen ? (
        <div className='lmj-cart'>
            <button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
            <h2>Ajouter une plante</h2>
            <p>Nom: </p><input type='text' placeholder='Nom' onChange={(e) => handleInput('name', e.target.value)} />
            <p>Catégorie: </p><input type='text' placeholder='Catégorie' onChange={(e) => handleInput('category', e.target.value)} />
            <p>Id: </p><input type='text' placeholder='Id' onChange={(e) => handleInput('id', e.target.value)} />
            <p>Luminosité: </p><input type='text' placeholder='Luminosité' onChange={(e) => handleInput('light', e.target.value)} />
            <p>Arrosage: </p><input type='text' placeholder='Arrosage' onChange={(e) => handleInput('water', e.target.value)} />
            <p>Image: </p><textarea placeholder='Image' onChange={(e) => handleInput('cover', e.target.value)} />
            <p>Prix: </p><input type='text' placeholder='Prix' onChange={(e) => handleInput('price', e.target.value)} />
            <p>Description: </p><textarea placeholder='Description' onChange={(e) => handleInput('info', e.target.value)} />
            <button id='add-plant' onClick={() => handleAddPlant()} >Ajouter</button>
        </div>
    ) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ajouter une Plante
			</button>
		</div>
	)
}

export default AddPlant