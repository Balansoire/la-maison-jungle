import PropTypes from 'prop-types';
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editPlant } from '../features/plantSlice'
import '../styles/Modal.css'

function FormInput({type, inputValue, setInputValue}) {
    const plantAttrs = {
        id:{title: 'Id'},
        name: {title: 'Nom'},
        category: {title: 'Catégorie', type: 'category'},
        light: {title: 'Luminosité', dataType: Number},
        water: {title: 'Arrosage', dataType: Number},
        cover: {title: 'Image',},
        price: {title: 'Prix', dataType: Number},
        info: {title: 'Description'}
    }
    const dataType = plantAttrs[type].dataType ?? String

    function handleInput(type, value) {
        console.log(inputValue)
        setInputValue({...inputValue, [type]:value})
        return
    }

    return (
        <div className='modal-item-edit'>
            <p>{plantAttrs[type].title}:</p>
            <textarea defaultValue={inputValue[type]} onChange={(e) => handleInput(type, dataType(e.target.value))}></textarea>
        </div>
    )
}

function EditModal({plant, setModal}) {
    const [inputValue, setInputValue] = useState(plant)
    const dispatch = useDispatch()

    function handleSave() {
        console.log(inputValue)
        dispatch(editPlant(inputValue))
    }

    return (
        <div className='modal'>
            <div onClick={() => setModal({isVisible:false})} className='overlay' ></div>
            <div className='modal-content'>
                <h2>{plant.name.charAt(0).toUpperCase()+plant.name.slice(1)}</h2>
                <div className='modal-body'>
                    {Object.keys(plant).map((key, index) => {
                        if (key === 'isVisible') return null
                        return (
                            <FormInput
                                key={key+'-'+index}
                                type={key}
                                index={index}
                                inputValue={inputValue}
                                setInputValue={setInputValue}
                            />
                        )
                    })}
                    <button onClick={() => handleSave()} >Sauvegarder</button>
                </div>
                <button className='close-modal' onClick={() => setModal({isVisible:false})} >CLOSE</button>
            </div>
        </div>
    )
}

EditModal.propTypes = {
    plant: PropTypes.object.isRequired,
    setModal: PropTypes.func.isRequired
}

export default EditModal