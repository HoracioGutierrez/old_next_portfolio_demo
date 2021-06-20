import { useSelector } from 'react-redux'
import CardHeader from "../CardHeader"
import CardFooter from "../CardFooter"
import CardContent from '../CardContent'

const CardContainer = ({children}) => {

    const dark = useSelector(({dark})=>dark)

    return (
        <main id="card-container">
            <CardHeader dark={dark}/>
            <CardContent children={children} dark={dark}/>
            <CardFooter dark={dark}/>
        </main>
    )
}

export default CardContainer