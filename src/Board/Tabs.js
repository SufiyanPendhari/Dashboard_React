import '../App.css'
import {useState} from 'react'

function Tabs() {
    const [Num,setNum]= useState(1)
    const onClick = (i) => {
        setNum(i)
    }
    return(
        <div className="T">
            <div className="T1">
                <Tab title="All Campaign" onClick={onClick} num="1" color={Num==1?'orange':'transparent'}/>
                <Tab title="Quick Campaign" onClick={onClick} num="2" color={Num==2?'orange':'transparent'}/>
                <Tab title="CSV Campaign" onClick={onClick} num="3" color={Num==3?'orange':'transparent'}/>
                <Tab title="URL Override Campaign" onClick={onClick} num="4" color={Num==4?'orange':'transparent'} />
            </div>
            <div className="T2">
                <CheckBox title="Show Archived"/>
            </div>
        </div>
    )
}

function Tab({title,onClick,num,color}){
    
    const onClicked =()=>{
        onClick(num)
    }
    return (
        <div className="Tab" onClick={onClicked} style={{borderBottomColor:color,borderBottomStyle:'solid',borderBottomWidth:'4px'  }}>{title}</div>
    )
}

function CheckBox({title}){
    return(
        <div className="check">
            <input type="checkbox"  />
                <span>{title}</span>
        </div>
    )
}
export default Tabs 
