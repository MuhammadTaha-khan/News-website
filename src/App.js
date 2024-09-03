import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { 
  Routes,
  Route,
  BrowserRouter,
}  from 'react-router-dom'

export default class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
        <NavBar/>
        <Routes>
         
        <Route path="/" element={<>
          <News pageSize={6} country="us" category="general"/>
          <home/>
        </>}></Route>

        <Route path="/Business" element={<>
          <News pageSize={6} country="us" category="business"/>
        <business/></>}></Route>  

        <Route path="/Entertainment" element={<>
          <News pageSize={6} country="us" category="entertainment"/>
        <entertainment/></>}></Route>

        <Route path="/General" element={<>
          <News pageSize={6} country="us" category="general"/>
        <general/></>}></Route>

        <Route path="/Health" element={<>
          <News pageSize={6} country="us" category="health"/>
        <health/></>}></Route>

        <Route path="/Science" element={<>
          <News pageSize={6} country="us" category="science"/>
        <science/></>}></Route>  

        <Route path="/Sports" element={<>
          <News pageSize={6} country="us" category="sports"/>
        <sports/></>}></Route> 

        <Route path="/Technology" element={<>
          <News pageSize={6} country="us" category="technology"/>
        <technology/></>}></Route>     

      </Routes>
      </BrowserRouter>
      </div>
    )
  }
}





