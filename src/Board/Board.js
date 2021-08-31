import '../App.css'
import Tabs from './Tabs'
import CampaignHeader from './Campaign-Heading';
import CampaignTile from './Campaign-Tile';
import Page from './page'
import Header from './Header';
import SubHeader from './Subheader';
import {useState,useEffect} from 'react'

function Board(){
    const [Data,setData]=useState([])
useEffect(()=>{
})
fetch('http://localhost:5000')
.then(res=>res.json())
.then(data=>setData(data))
    

    
    // console.log(Data)
    return(
        <div className="right">
           <Header/>
           <SubHeader/>
           <Tabs/>
           
           <div className="Campaign">
           <CampaignHeader/>
           {
               Data.map((e)=>{
                   console.log(e);
                 return  <CampaignTile title={e.name} status={e.status} date={e.createdAt} method={e.method} media={e.media} />
               }) 
           }
           <Page/>
           </div>
         </div>
    )
}

export default Board