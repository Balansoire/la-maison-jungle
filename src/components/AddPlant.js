import { useEffect, useState } from 'react'
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

    function plantNotValid(plant) {
        return plant.name === '' || plant.category === '' || plant.id === '' || plant.light === '' || plant.water === '' || plant.cover === '' || plant.price === '' || plant.info === ''
    }
    function FormInput({title, type}) {
        return (
            <>
                <p>{title} :</p><input type='text' placeholder={title} onChange={(e) => handleInput(type, e.target.value)} />
            </>
        )
    }
    function handleInput(key, value) {
        inputPlant[key] = value
        console.log(inputPlant)
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
            <FormInput title='Nom' type='name' />
            <FormInput title='Catégorie' type='category' />
            <FormInput title='Id' type='id' />
            <FormInput title='Luminosité' type='light' />
            <FormInput title='Arrosage' type='water' />
            <FormInput title='Image' type='cover' />
            <FormInput title='Prix' type='price' />
            <FormInput title='Description' type='info' />
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