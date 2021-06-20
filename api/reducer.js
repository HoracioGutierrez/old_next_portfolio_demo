import { CARD_TOGGLE, DARK_TOGGLE, TAB_CHANGE } from "./action_const"

const init = {
    dark : false,
    card_open : true,
    tabs : [
        {id:1,text:"Bio",url:"/",active:true},
        {id:2,text:"Demos",url:"/demos",active:false}
    ]
}

const reducer = (state = init, action) => {
    switch (action.type) {

        case DARK_TOGGLE :
            return {
                ...state,
                dark : !state.dark
            }

        case TAB_CHANGE : 
            return {
                ...state,
                tabs : state.tabs.map(tab=>{
                    if(tab.id == action.id){
                        return {
                            ...tab,
                            active : true
                        }
                    }else{
                        return {
                            ...tab,
                            active : false
                        }
                    }
                })
            }

        case CARD_TOGGLE:
            return {
                ...state,
                card_open : !state.card_open
            }

        default:
            return state
    }
}

export default reducer
