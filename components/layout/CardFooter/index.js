import { useState } from "react"
import { useCardState } from "../../../api/CustomHooks"
import Menu from "@material-ui/core/Menu"
import MenuItem from '@material-ui/core/MenuItem'
import { useDispatch } from "react-redux"
import { darkToggle } from "../../../api/actions"


const CardFooter = ({dark}) => {

    const dispatch = useDispatch()
    const card_open = useCardState()
    const [anchorEl,setAnchorEl] = useState(null) 

    const handleOpen = e => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
        dispatch(darkToggle())
    }

    return (
        <div id="card-container-footer-containter" className={`${dark&&"dark"}`}>
            <div className={`horizontal-rule ${card_open?"open":"closed"}`}>
                <div></div>
            </div>
            <section id="card-container-footer">
                <nav id="card-container-options">
                    <button className="material-icons">send</button>
                    <button className="material-icons">share</button>
                </nav>
                <Menu id="dark-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} anchorOrigin={{vertical:"center",horizontal:"center"}} transformOrigin={{vertical:"center",horizontal:"right"}}>
                    <MenuItem onClick={handleClose}>Modo Dark</MenuItem>
                </Menu>
                <button onClick={handleOpen} className="material-icons">more_vert</button>
            </section>
        </div>
    )
}

export default CardFooter