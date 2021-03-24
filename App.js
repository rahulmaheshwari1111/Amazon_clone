
import './App.css';
import{BrowserRouter, Switch, Route} from "react-router-dom"
import Header from './Header';
import Home from './Home'
import Checkout from './Checkout';
import Login from './Login';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path = '/checkout'>
   
   <Header/>
   {/* checkout */}
   <Checkout/>
   </Route>

   <Route path = '/login'>
  <Login/>
   </Route>


   <Route path = '/'>
     <Header/>
  
   <Home/>
   <Footer/>
 
   </Route>

   </Switch>
    </div></BrowserRouter>
  );
}

export default App;
