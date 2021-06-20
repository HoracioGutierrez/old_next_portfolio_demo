import { useDispatch, useSelector } from "react-redux"
import Link from "next/link"
import { tabChange } from "../../../api/actions"

const CardTabs = ({card_open}) => {

    const tabs = useSelector(({tabs})=>tabs)
    const dispatch = useDispatch()

    const handleClick = id => {
        dispatch(tabChange(id))
    }

    return (
        <div id="tab-container">
            <div className="tabs">
                {tabs.map(tab=>(
                    <div key={tab.id}>
                        <Link href={tab.url}>
                            <a onClick={()=>handleClick(tab.id)} className={`tab-link ${tab.active&&"active"}`}>{tab.text}</a>
                        </Link>
                    </div>
                ))}
            </div>
            <div className={`horizontal-rule ${card_open?"open":"closed"}`}>
                <div></div>
            </div>
        </div>
    )
}

export default CardTabs