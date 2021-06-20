import { CARD_TOGGLE, CHAT_CLOSE, CHAT_MINI, CHAT_OPEN, DARK_TOGGLE, TAB_CHANGE } from "./action_const"

export const toggleCard = () => ({type:CARD_TOGGLE})

export const tabChange = id => ({type:TAB_CHANGE,id})

export const darkToggle = () => ({type:DARK_TOGGLE})

export const chatOpen = () => ({type:CHAT_OPEN})

export const chatClose = () => ({type:CHAT_CLOSE})

export const chatMini = () => ({type:CHAT_MINI})