import { CARD_TOGGLE, TAB_CHANGE } from "./action_const"

export const toggleCard = () => ({type:CARD_TOGGLE})

export const tabChange = id => ({type:TAB_CHANGE,id})