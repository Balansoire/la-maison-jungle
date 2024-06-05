import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editPlant } from '../features/plantSlice'
import '../styles/Modal.css'

function EditModal({plant, setModal}) {
    const [inputValue, setInputValue] = useState(plant)
    const dispatch = useDispatch()

    function handleInput(key, e) {
        setInputValue({...inputValue, [key]:e.target.value})
        console.log(inputValue)
    }
    function handleSave() {
        dispatch(editPlant(inputValue))
    }

    return (
        <div className='modal'>
            <div onClick={() => setModal({isVisible:false})} className='overlay' ></div>
            <div className='modal-content'>
                <h2>{plant.name.charAt(0).toUpperCase()+plant.name.slice(1)}</h2>
                <div className='modal-body'>
                    {
                        Object.keys(plant).map((key, index) => {
                            if (key === 'isVisible') return null
                            return (
                                <div key={key+'-'+index} className='modal-item-edit'>
                                    <p>{key.charAt(0).toUpperCase()+key.slice(1)}:</p>
                                    <textarea defaultValue={plant[key]} onChange={(e) => handleInput(key, e)}></textarea>
                                </div>
                            )
                        })
                    }
                    <button onClick={() => handleSave(plant)} >Sauvegarder</button>
                </div>
                <button className='close-modal' onClick={() => setModal({isVisible:false})} >CLOSE</button>
            </div>
        </div>
    )
}

export default EditModal