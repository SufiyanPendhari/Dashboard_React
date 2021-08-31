import CheckBox from './CheckBox'
import '../App.css'
import{GoGraph } from 'react-icons/go'
import {AiOutlineDownload} from 'react-icons/ai'
import {BsCollection} from 'react-icons/bs'

function CampaignTile({title,status,date,method,media}) {
    return (
        <div className="CT">
            <div className="ct1"><CheckBox title={title}/></div>
            <div className="ct2"><Status title={status}/></div>
            <div className="ct3">{date}</div>
            <div className="ct4">{method}</div>
            <div className="ct5">{media}</div>
            <div className="ct6">
                <div>
                <Block icon={<GoGraph size="16px" color="green"/>} color="#e8f5e9"/>
                </div>
                <div>
                <Block icon ={<AiOutlineDownload size="16px" color="blue"/>} color="#e1f5fe"/>
                </div>
                <div>

                <Block icon={<BsCollection size="18px"/>} color="#e0f2f1" />
                </div>
            </div>
        </div>
    )
}

function Status ({title}){
    return (
        <div className="Status" style={{color:title=="Success"?"green":"red", backgroundColor:title=="Success"?"#b9f6ca":"#ffebee"}}>
            {title}
        </div>
    )
}
function Block({icon,color}){
 return (
     <div className="block" style={{backgroundColor:color}}>{icon}</div>

 )
}

export default CampaignTile