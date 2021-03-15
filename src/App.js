import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import Home from './home';
import About from './about';
import Contact from './contact';
import Offer from './offer';
import Top from "./Components/tophead";
import Blog from './blog';
import { Route,Link } from "react-router-dom";

function App() {
  return (
    
    <div className="App">
      <Top/>
      <Navbar/>
  
      <Route exact path="/" component={Home}/>
      <Route exact path="/About" component={About}/>
      <Route exact path="/Contact" component={Contact}/>
      <Route exact path="/Offer" component={Offer}/>
      <Route exact path="/Blog" component={Blog}/>

    
    </div>
    

  );
}

export default App;
