import Navbar from './components/Navbar/Navbar';
import MainPage from './components/MainPage/MainPage';
import './components/elements/Chat.css'
import {Route, Routes} from "react-router-dom"
import Second from './components/elements/Second';
import Thirt from './components/elements/Thirt';
function App() {
     return ( 
     <>
     
 <Navbar/>
 <Routes>
 <Route path= "/" Component={MainPage}/> 
 <Route path="/Second" Component={Second}/> 
 <Route path="/Thirt" Component={Thirt}/>
 </Routes>
    </>
     );
}
export default App;