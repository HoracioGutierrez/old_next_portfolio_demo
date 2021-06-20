import { useCardState } from "../../../api/CustomHooks"
import CardTabs from "../CardTabs"
import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'


const CardContent = ({children,dark}) => {

    const card_open = useCardState()

    return (
        <section id="card-container-content" className={`${dark&&"dark"} ${card_open?"open":"closed"}`}>
            <SlideDown className="custom-slidedown">
                            
                {card_open ? <><CardTabs card_open={card_open}/>{children}</> : null}

            </SlideDown>
        </section>
    )
}

export default CardContent