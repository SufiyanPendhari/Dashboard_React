import '../App.css'
import {CgProfile} from 'react-icons/cg'
import {FaQuestionCircle} from 'react-icons/fa'
import {BiMenuAltLeft } from 'react-icons/bi'
 
function Header() {
    return(
        <div className="H">
            <div className="h2"><BiMenuAltLeft color="darkblue" size="20px"/> How are you doing today <span>Inder?</span></div>
            <div className="h3">Web Campaign</div>
            <div className="h4"> Credit : <span>200</span></div>
            <div className="h5">
                <div className="h51"><FaQuestionCircle size="25px"/></div>
                <div className="h52"><CgProfile color="orange" size="25px"/></div>
            </div>
        </div>
    )
}

export default Header