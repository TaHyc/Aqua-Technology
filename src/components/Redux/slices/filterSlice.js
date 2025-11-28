import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedMenu: [],
  selectedSort: {
  name: 'цене (возрастание)',
  sortProperti: '-price'},
}

export const filterSort = createSlice({
  name: 'filter',
  initialState,
  reducers: {
  setSelectedSort(state, action){
 state.selectedSort = action.payload;
},
  setSelectedMenu(state, action){
 state.selectedMenu = action.payload;
},
},
})

export const {setSelectedSort, setSelectedMenu} = filterSort.actions

export default filterSort.reducer