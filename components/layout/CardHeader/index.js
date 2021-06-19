import SocialNavBar from '../../widgets/SocialNavBar'
import CardAvatar from '../CardAvatar'
import CardTitle from '../CardTitle'

const CardHeader = () => {
    return (
        <section id="card-container-header">
            <div id="overlay"></div>
            <CardAvatar/>
            <CardTitle/>
            <SocialNavBar/>
        </section>
    )
}

export default CardHeader