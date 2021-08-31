import './App.css';
import MenuBar from './Menu/MenuBar';
import Board from './Board/Board'
import { BrowserRouter, Route } from 'react-router-dom';
import Blank from './Blank'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <div className="D">
       <MenuBar/>
       
       <Route path="/" exact component={Board}/>
       <Route path='/blank' component={Blank}/>
       

       </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
