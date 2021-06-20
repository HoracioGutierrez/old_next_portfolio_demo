import { useCardState } from "../../../api/CustomHooks"

const CardFooter = () => {

    const card_open = useCardState()

    return (
        <div id="card-container-footer-containter">
            <div className={`horizontal-rule ${card_open?"open":"closed"}`}>
                <div></div>
            </div>
            <section id="card-container-footer">
                <nav id="card-container-options">
                    <button className="material-icons">send</button>
                    <button className="material-icons">share</button>
                </nav>
                <button className="material-icons">more_vert</button>
            </section>
        </div>
    )
}

export default CardFooter