import "../assets/global.scss"
import CardContainer from "../components/layout/CardContainer"

function MyApp ({Component,pageProps}) {
    
    return (
        <>
            <CardContainer>
                <Component {...pageProps}/>
            </CardContainer>
        </>
    )
}

export default MyApp