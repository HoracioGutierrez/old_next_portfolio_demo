import { useSelector } from 'react-redux'
import CardHeader from "../CardHeader"
import CardFooter from "../CardFooter"
import CardContent from '../CardContent'

const CardContainer = ({children}) => {

    return (
        <main id="card-container">
            <CardHeader/>
            <CardContent children={children}/>
            <CardFooter/>
        </main>
    )
}

export default CardContainer