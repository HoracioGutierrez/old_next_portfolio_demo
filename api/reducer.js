const init = {
    card_open : true
}

const reducer = (state = init, action) => {
    switch (action.type) {

        case "CARD_TOGGLE":
            return {
                ...state,
                card_open : !state.card_open
            }

        default:
            return state
    }
}

export default reducer
