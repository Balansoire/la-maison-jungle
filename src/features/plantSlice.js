import { createSlice } from '@reduxjs/toolkit'
import ref from '../datas/db-ref.json'

const initialState = {
  plantList: []
};

function fetchPlantList() {
  return fetch('http://localhost:3001/plantList')
  .then((response) => response.json())
  .catch((error) => {
    console.error('An error occurred while fetching:', error);
  });
}

async function sendPlantList(plantList) {
  fetch('http://localhost:3001/plantList', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(plantList)
  })
  .then((response) => response.json())
  .catch((error) => {
    console.error('An error occurred while sending plant list:', error);
  });
}

const plantSlice = createSlice({
  name: 'plantList',
  initialState,
  reducers: {
    setPlantList(state, action) {
      state.plantList = action.payload;
    },
    addPlant(state, action) {
      const plantInList = state.plantList.find(plant => plant.id === action.payload.id);
      if (plantInList) {
        alert('Une plante avec cet id existe déjà')
        return
      }
      state.plantList.push(action.payload);
      sendPlantList(state.plantList);
    },
    editPlant(state, action) {
      console.log(action)
      fetch(`http://localhost:3001/plantList/${action.payload.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(action.payload)
      })
      .then((response) => response.json())
      .catch((error) => {
        console.error('An error occurred while sending plant list:', error);
      });
      state.plantList = state.plantList.map(plant => plant.id === action.payload.id ? action.payload : plant);
      console.log('Plant edited');
    },
    removePlant(state, action) {
      fetch(`http://localhost:3001/plantList/${action.payload}`, {
        method: 'DELETE'
      })
      .then((response) => response.json())
      .catch((error) => {
        console.error('An error occurred while sending plant list:', error);
      });
      state.plantList = state.plantList.filter(plant => plant.id !== action.payload);
    },
    resetPlantList(state) {
      console.log(ref)
      setPlantList(ref.plantList);
      state.plantList = ref.plantList;
    }
  }
});

export const { setPlantList, addPlant, editPlant, removePlant, resetPlantList } = plantSlice.actions;
export default plantSlice.reducer;

export const initializePlantList = () => async dispatch => {
  const plantList = await fetchPlantList();
  dispatch(setPlantList(plantList));
};
