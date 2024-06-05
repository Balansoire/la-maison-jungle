import { useDispatch } from 'react-redux'
import { removeItem } from '../features/cartSlice'

function CartItem ({name, price, amount}) {
	const dispatch = useDispatch()

    function handleRemoveItem(name) {
        dispatch(removeItem(name))
    }

    return (
        <div>
            {name} {price}€ x {amount} <button style={{color: 'red'}} onClick={() => handleRemoveItem(name)}>X</button>
        </div>
    )
}

export default CartItem