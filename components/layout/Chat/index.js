import { useDispatch, useSelector } from "react-redux"
import { chatClose, chatMini } from "../../../api/actions"

const Chat = () => {

    const dispatch = useDispatch()
    const chat = useSelector(({chat})=>chat)
    const {open,mini} = chat

    console.log(mini)

    const handleCloseChat = () => {
        dispatch(chatClose())
    }

    const handleToggleMini = () => {
        dispatch(chatMini())
    }

    return (
        <div id="chat" className={`${open?"open":"closed"} ${mini&&"mini"}`}>
            <div id="chat-header">
                Enviar mensaje
                <nav>
                    <button className="material-icons" onClick={handleToggleMini}>{mini?"keyboard_arrow_up":"keyboard_arrow_down"}</button>
                    <button className="material-icons" onClick={handleCloseChat}>close</button>
                </nav>
            </div>
            <div id="chat-content">
                <div id="chat-mensajes">
                    <p>No tenes ningun mensaje con este usuario</p>
                </div>
                <div id="chat-form">
                    <textarea></textarea>
                    <button>enviar</button>
                </div>
            </div>
        </div>
    )
}

export default Chat