import { ADD_NUMBER, SUB_NUMBER, INCNUMBER, DECNUMBER } from './constants.js'

export const addAction = num => ({ type: ADD_NUMBER, num })
export const subAction = num => ({ type: SUB_NUMBER, num })
export const incAction = () => ({ type: INCNUMBER })
export const decAction = () => ({ type: DECNUMBER })