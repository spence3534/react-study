import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes'
export const inputChange = (value) => ({
  type: CHANGE_INPUT,
  value
})

export const handleAddItme = () => ({
  type:ADD_ITEM
})

export const handleDeleteItem = (index) => ({
  type:DELETE_ITEM,
  index
})