import '../styles/Modal.css'

function Modal({name, info, setModal}) {
    return (
        <div className='modal'>
            <div onClick={() => setModal({isVisible:false})} className='overlay' ></div>
            <div className='modal-content'>
                <h2>{name.charAt(0).toUpperCase()+name.slice(1)}</h2>
                <p>{info}</p>
                <button className='close-modal' onClick={() => setModal({isVisible:false})} >CLOSE</button>
            </div>
        </div>
    )
}

export default Modal