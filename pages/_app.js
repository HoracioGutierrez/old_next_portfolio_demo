import { Provider } from "react-redux"
import store from "../api/store"
import "../assets/global.scss"
import CardContainer from "../components/layout/CardContainer"
import MainFooter from "../components/layout/MainFooter"

function MyApp ({Component,pageProps}) {
    
    return (
        <Provider store={store}>
            <CardContainer>
                <Component {...pageProps}/>
            </CardContainer>
            <MainFooter/>
        </Provider>
    )
}

export default MyApp