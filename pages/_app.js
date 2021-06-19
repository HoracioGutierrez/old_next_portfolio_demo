import "../assets/global.scss"
import CardContainer from "../components/layout/CardContainer"
import MainFooter from "../components/layout/CardFooter"

function MyApp ({Component,pageProps}) {
    
    return (
        <>
            <CardContainer>
                <Component {...pageProps}/>
            </CardContainer>
            <MainFooter/>
        </>
    )
}

export default MyApp