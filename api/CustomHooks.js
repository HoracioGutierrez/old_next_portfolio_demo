import { useSelector } from 'react-redux'

export const useCardState = () => {

    const card_open = useSelector(({card_open})=>card_open)

    return card_open

}