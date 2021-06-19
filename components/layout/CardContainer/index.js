import CardHeader from "../CardHeader"

const CardContainer = ({children}) => {
    return (
        <main id="card-container">
            <CardHeader/>
            <section id="card-container-content">
                {children}
            </section>
        </main>
    )
}

export default CardContainer