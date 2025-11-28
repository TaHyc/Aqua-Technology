import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalPrice: 0,
  items: []
}

export const tovarKorzina = createSlice({
  name: 'korzina',
  initialState,
  reducers: {
  addItems(state, action){
    const findItem =state.items.find((obj) => obj.id == action.payload.id)
    if(findItem) {
      findItem.count++
    } else {
      state.items.push({...action.payload, count:1})
    }
  },
  minusItem(state, action){
    const findItem =state.items.find(obj => obj.id == action.payload)
    if(findItem) {
      findItem.count--
    }
  },
  removeItems(state, action){
    state.items=state.items.filter(obj => obj.if != action.payload)
  },
  clearItems(state){
    state.items=[]
  },
},
})

export const {addItems, removeItems, minusItem, clearItems} = tovarKorzina.actions

export default tovarKorzina.reducer