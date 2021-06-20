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
                <button onClick={handleToggle} className="material-icons">close</button>
            </div>
            <CardAvatar/>
            <CardTitle/>
            <SocialNavBar/>
        </section>
    )
}

export default CardHeader