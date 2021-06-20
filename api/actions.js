import { CARD_TOGGLE, DARK_TOGGLE, TAB_CHANGE } from "./action_const"

export const toggleCard = () => ({type:CARD_TOGGLE})

export const tabChange = id => ({type:TAB_CHANGE,id})

export const darkToggle = () => ({type:DARK_TOGGLE})