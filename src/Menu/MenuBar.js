import Menu from './Menu';
import '../App.css'
import { FileCopy, Settings } from '@material-ui/icons';
import {HiSpeakerphone} from 'react-icons/hi'
import {AiTwotoneSetting} from 'react-icons/ai'
import {CgWebsite,CgTemplate} from 'react-icons/cg'
import {RiLogoutBoxLine} from 'react-icons/ri'
import {IoRocket} from 'react-icons/io5'
import {VscDebugDisconnect} from 'react-icons/vsc'
import {useState} from 'react'
function MenuBar() {
    const [Num,setNum]= useState(3)
  const onClick = (i) => {
      setNum(i)
  }
    return(
        <div className="left">
          <div className="Main-Tile"> 
        <Menu path="/" icon={<IoRocket color="darkblue" size="30px" />}title={<span className="Title" >New<span className="Title-2">Company</span></span>}
        onClick={onClick} num="1" color={Num==1?'transparent':'transparent'}/>
          </div>
        <Menu path="/blank" icon={<IoRocket color="darkblue" size="25px" />} title="Get Started" onClick={onClick} num="1" color={Num==1?'orange':'transparent'}/>
        <Menu path="/blank" icon={<CgTemplate color="darkblue" size="25px"/>} title="Templates"
        onClick={onClick} num="2" color={Num==2?'orange':'transparent'}/>
        <Menu path="/" icon={<HiSpeakerphone color="darkblue" size="25px"/>} title="Campaigns" onClick={onClick} num="3" color={Num==3?'orange':'transparent'}/>
        <Menu path="/blank" icon={<VscDebugDisconnect color="darkblue" size="25px"/>} title="Integration" onClick={onClick} num="4" color={Num==4?'orange':'transparent'}/>
        <Menu path="/blank" icon={<CgWebsite color="darkblue" size="25px"/>} title="Manage Websites" onClick={onClick} num="5" color={Num==5?'orange':'transparent'}/>
        <Menu path="/blank" icon={<AiTwotoneSetting color="darkblue" size="25px"/>} title="Settings" onClick={onClick} num="6" color={Num==6?'orange':'transparent'}/>
        <div className="lo">
       <Menu path="/" icon={<RiLogoutBoxLine color="darkblue" size="25px" />} title="Logout" onClick={onClick} num="1" color={Num==1?'transparent':'transparent'}/>
        </div>
      </div>
    )
}

export default MenuBar
