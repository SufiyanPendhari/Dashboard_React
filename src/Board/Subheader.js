import '../App.css'
import {FiRefreshCw} from 'react-icons/fi'

function SubHeader() {
    return(
        <div className="SH">
            <div className="sh1">Campaign</div>
            <div className="sh2"><FiRefreshCw/></div>
            <div className="sh3"> + Create a new campaign </div>
        </div>
    )
}

export default SubHeader