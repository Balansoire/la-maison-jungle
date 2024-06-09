import { useDispatch } from 'react-redux'
import { removeItem } from '../features/cartSlice'
import PropTypes from 'prop-types';

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

CartItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired
};

export default CartItem