function CartItem ({name, price, amount, cart, updateCart}) {
    function removeItem(name) {
        const plantIndex = cart.findIndex((plant) => plant.name === name)
        updateCart(cart.filter((plant, index) => index !== plantIndex))
    }

    return (
        <div>
            {name} {price}€ x {amount} <button style={{color: 'red'}} onClick={() => removeItem(name)}>X</button>
        </div>
    )
}

export default CartItem