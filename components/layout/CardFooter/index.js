import { useState } from "react"
import { useCardState } from "../../../api/CustomHooks"
import Menu from "@material-ui/core/Menu"
import MenuItem from '@material-ui/core/MenuItem'
import { useDispatch } from "react-redux"
import { chatOpen, darkToggle } from "../../../api/actions"
import Snackbar from '@material-ui/core/Snackbar';


const CardFooter = ({dark}) => {

    const dispatch = useDispatch()
    const card_open = useCardState()
    const [anchorEl,setAnchorEl] = useState(null) 
    const [open,setOpen] = useState(false)

    const handleOpen = e => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }
    
    const handleToggleDark = () => {
        dispatch(darkToggle())
        handleClose()
    }
    
    const handleCopyUrl = () => {
        const el = document.createElement("textarea")
        el.value = location.href
        document.body.appendChild(el)
        el.select()
        document.execCommand("copy")
        document.body.removeChild(el)
        setOpen(true)

    }

    const handleCloseSnack = () => {
        setOpen(false)
    }

    const handleOpenChat = () => {
        dispatch(chatOpen())
    }

    return (
        <div id="card-container-footer-containter" className={`${dark&&"dark"}`}>
            <div className={`horizontal-rule ${card_open?"open":"closed"}`}>
                <div></div>
            </div>
            <section id="card-container-footer">
                <nav id="card-container-options">
                    <button onClick={handleOpenChat} className="material-icons">send</button>
                    <button onClick={handleCopyUrl} className="material-icons">share</button>
                </nav>
                <Snackbar
                    open={open}
                    autoHideDuration={2000}
                    message="Se copio la url!"
                    onClose={handleCloseSnack}
                />
                <Menu id="dark-menu" getContentAnchorEl={null} anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} anchorOrigin={{vertical:"top",horizontal:"left"}} transformOrigin={{vertical:"bottom",horizontal:"right"}}>
                    <MenuItem onClick={handleToggleDark}>Modo Dark</MenuItem>
                </Menu>
                <button onClick={handleOpen} className="material-icons">more_vert</button>
            </section>
        </div>
    )
}

export default CardFooter