import { CARD_TOGGLE, TAB_CHANGE } from "./action_const"

const init = {
    card_open : true,
    tabs : [
        {id:1,text:"Bio",url:"/",active:true},
        {id:2,text:"Demos",url:"/demos",active:false}
    ]
}

const reducer = (state = init, action) => {
    switch (action.type) {

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
