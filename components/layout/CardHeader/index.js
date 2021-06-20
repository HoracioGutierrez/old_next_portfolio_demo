import { useDispatch, useSelector } from 'react-redux'
import { toggleCard } from '../../../api/actions'
import SocialNavBar from '../../widgets/SocialNavBar'
import CardAvatar from '../CardAvatar'
import CardTitle from '../CardTitle'

const CardHeader = () => {

    const card_open = useSelector(({card_open})=>card_open)
    const dispatch = useDispatch()

    const handleToggle = () => {
        dispatch(toggleCard())
    }

    return (
        <section id="card-container-header">
            <div id="overlay">
                {card_open && <button onClick={handleToggle} className="material-icons">close</button>}
            </div>
            <CardAvatar/>
            <CardTitle/>
            <SocialNavBar card_open={card_open}/>
            {!card_open && <button id="profile-toggler" onClick={handleToggle}>VER PERFIL</button>}
        </section>
    )
}

export default CardHeader