import { createSlice } from '@reduxjs/toolkit';
import { plantList } from '../datas/plantList';

const initialState = {
  plantList: localStorage.getItem('plantList') ? JSON.parse(localStorage.getItem('plantList')) : plantList
};

const plantSlice = createSlice({
  name: 'plantList',
  initialState,
  reducers: {
    addPlant(state, action) {
      const plantInList = state.plantList.find(plant => plant.id === action.payload.id)
      if (plantInList) {
        alert('Une plante avec cet id existe déjà')
        return
      }
      state.plantList.push(action.payload);
      saveToLocalStorage(state);
    },
    editPlant(state, action) {
      console.log('action:')
      console.log(action)
      state.plantList = state.plantList.filter(plant => plant.id !== action.payload.id);
      state.plantList.push(action.payload);
      saveToLocalStorage(state);
    },
    removePlant(state, action) {
      state.plantList = state.plantList.filter(plant => plant.id !== action.payload);
      saveToLocalStorage(state);
    },
    resetPlantList(state) {
      console.log('plantList before reset:')
      console.log(state.plantList)
      console.log('reset')
      state.plantList = plantList;
      saveToLocalStorage(state);
      console.log('plantList after reset:')
      console.log(state.plantList)
    }
  }
});

function saveToLocalStorage(state) {
  const plantList = state.plantList;
  localStorage.setItem('plantList', JSON.stringify(plantList));
}

export const { addPlant, editPlant, removePlant, resetPlantList } = plantSlice.actions;
export default plantSlice.reducer;
