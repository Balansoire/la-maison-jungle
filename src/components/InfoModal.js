import '../styles/Modal.css'

function InfoModal({name, info, cover, setModal}) {
    return (
        <div className='modal'>
            <div onClick={() => setModal({isVisible:false})} className='overlay' ></div>
            <div className='modal-content'>
                <h2>{name.charAt(0).toUpperCase()+name.slice(1)}</h2>
                <div className='modal-body'>
                    <img className='modal-item-cover' src={cover} alt={`${name} cover`} />
                    <p className='modal-item-info' >{info}</p>
                </div>
                <button className='close-modal' onClick={() => setModal({isVisible:false})} >CLOSE</button>
            </div>
        </div>
    )
}

export default InfoModal