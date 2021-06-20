import { useCardState } from "../../../api/CustomHooks"

const CardContent = ({children}) => {

    const card_open = useCardState()

    return (
        <section id="card-container-content" className={`${card_open?"open":"closed"}`}>
            {children}
        </section>
    )
}

export default CardContent