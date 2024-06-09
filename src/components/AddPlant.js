import { useState } from 'react'
import PropTypes from 'prop-types';
import { addPlant } from "../features/plantSlice";
import { useDispatch } from 'react-redux'
import '../styles/Cart.css'

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

function FormInput({title, type}) {
    

    function handleInput(key, value) {
        inputPlant[key] = value
        console.log(inputPlant)
    }

    return (
        <>
            <p>{title} :</p><input type='text' placeholder={title} onChange={(e) => handleInput(type, e.target.value)} />
        </>
    )
}

FormInput.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

function AddPlant() {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(true)

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