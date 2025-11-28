import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Korzina from "./components/Header/Korzina";
import Pay from "./components/Header/Pay";
import LoginPage from "./components/Auth/LoginPage";
import MakingOrder from "./components/Header/MakingOrder";
import Service from "./components/Service/Service";
import Katalog from "./components/Katalog/Katalog";
import Detailed from "./components/Portfolio/Detailed";
import About from "./components/About/About";
import Main from "./components/Main/Main";
import Building from "./components/Building/Building";
import Proeckting from "./components/Proeckting/Proeckting";
import Lower from "./components/Lower/Lower";
import Contacts from "./components/Contacts/Contacts";
import ProductPage from './components/Katalog/ProductPage';
import Portfolio from "./components/Portfolio/Portfolio";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export const SearchContext = React.createContext('');
export const TovarContext = React.createContext('');

const App = () =>{

const [search, setSelectedSearch] = React.useState('');
const [SelectedTovar, setSelectedTovar] = React.useState('');

return (

      <BrowserRouter>
  <div className="appWrap">
  <SearchContext.Provider value={{search, setSelectedSearch}}>
  <TovarContext.Provider value={{SelectedTovar, setSelectedTovar}}>

    <Header />
      <div className="appWrapContent">
        <Routes>
        
        <Route path='/Aqua-Technology' element={ <Main /> } />
        <Route path='servis/' element={ <Service /> } />
        <Route path='login/' element={ <LoginPage /> } />
        <Route path='korzina/' element={ <Korzina /> } />
        <Route path='makingOrder/' element={ <MakingOrder /> } />
        <Route path='payment/' element={ <Pay /> } />
        <Route path='katalog/' element={ <Katalog /> } /> 
        <Route path='katalog/:id' element={ <ProductPage/> } /> 
        <Route path='about/' element={ <About /> } />
        <Route path='сontacts/' element={ <Contacts /> } />
        <Route path='portfolio/' element={ <Portfolio  /> } />
        <Route path='portfolio/:id' element={ <Detailed /> }/>
        <Route path='building/' element={ <Building /> } />
        <Route path='proeckting/' element={ <Proeckting /> }/>

        </Routes>
    

      </div>

    <Lower />
    </TovarContext.Provider>
    </SearchContext.Provider>
  </div>

    </BrowserRouter>  
      )

  }

  export default App;
