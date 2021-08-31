import { Link } from 'react-router-dom'
import '../App.css'

function Menu({icon,title,onClick,color,num,path}) {
    const onClicked =()=>{
        onClick(num)
    }
    return(
        <Link to={path} className="link">
        <div className="Menu"  onClick={onClicked} style={{borderLeftColor:color,borderLeftStyle:'solid',borderLeftWidth:'4px'  }}>
            <div className="icon">{icon}</div>
            <div className="title">{title}</div>
        </div>
        </Link>
    )

    
}

export default Menu