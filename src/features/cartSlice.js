import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
        const name = action.payload.name
        const price = action.payload.price

        const currentPlantAdded = state.cart.find((plant) => plant.name === name && plant.price === price)
		if (currentPlantAdded) {
			const cartFilteredCurrentPlant = state.cart.filter(
				(plant) => plant.name !== name || plant.price !== price
			)
			state.cart = [
                ...cartFilteredCurrentPlant,
                {name: name, price: price, amount: currentPlantAdded.amount + 1}
            ]
		} else {
			state.cart = [
                ...state.cart,
                { name: name, price: price, amount: 1 }
            ]
		}
    },
    removeItem(state, action) {
      state.cart = state.cart.filter(item => item.name !== action.payload);
    },
    emptyCart(state) {
        state.cart = []
    }
  }
});

export const { addItem, removeItem, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
