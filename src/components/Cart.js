import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { emptyCart } from '../features/cartSlice'
import CartItem from './CartItem'
import '../styles/Cart.css'

function Cart() {
	const cart = useSelector((state) => state.cart.cart)
	const dispatch = useDispatch()

	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plant) => acc + plant.price * plant.amount,
		0
	)
	useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`
	}, [total])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	})

	function handleEmptyCart() {
		dispatch(emptyCart())
	}

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<CartItem key={`${name}-${index}`} name={name} price={price} amount={amount} index={index} />
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => handleEmptyCart()}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart
