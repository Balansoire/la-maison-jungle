import PropTypes from 'prop-types'
import { useState } from 'react'
import { addPlant } from "../features/plantSlice";
import { useDispatch } from 'react-redux'
import '../styles/Cart.css'


function FormInput({title, type, dataType = 'text', inputValue, setInputValue}) {
    

    function handleInput(key, value) {
        switch(dataType) {
            case 'number':
                value = Number(value)
                break
            case 'text':
                value = String(value)
                break
            default: break
        }
        setInputValue({...inputValue, [key]:value})
    }

    return (
        <>
            <p>{title} :</p><input type='text' placeholder={title} onChange={(e) => handleInput(type, e.target.value)} />
        </>
    )
}

FormInput.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    dataType: PropTypes.string,
    inputValue: PropTypes.object.isRequired,
    setInputValue: PropTypes.func.isRequired
};


function AddPlant() {
    const formInputs = [
        {title: 'Id', type: 'id'},
        {title: 'Nom', type: 'name'},
        {title: 'Catégorie', type: 'category'},
        {title: 'Luminosité', type: 'light'},
        {title: 'Arrosage', type: 'water'},
        {title: 'Image', type: 'cover'},
        {title: 'Prix', type: 'price', dataType: 'number'},
        {title: 'Description', type: 'info'}
    ]
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(true)
    const [inputPlant, setInputPlant] = useState({
        name: '',
        category: '',
        id: '',
        light: '',
        water: '',
        cover: '',
        price: 0,
        info: ''
    })

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
            {formInputs.map((input, index) => (
                <FormInput 
                    key={input.title+index}
                    title={input.title}
                    type={input.type}
                    dataType={input.dataType}
                    inputValue={inputPlant}
                    setInputValue={setInputPlant}
                />
            ))}
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