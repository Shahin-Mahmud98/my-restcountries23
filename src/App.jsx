import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className='App'>
      <RestCountries></RestCountries>
    </div>
    
  )
}



function RestCountries(props){
  const [countries,setCountries] = useState([])

useEffect(()=>{
  fetch("https://restcountries.com/v3.1/all")
  .then(res => res.json())
  .then(data => setCountries(data))
},[])



  return(
    <div>
      <h1>Available Countries : {countries.length }</h1>
      {
  countries.map(country => <Country name = {country.name.common} population = {country.population} ></Country>)
}
    </div>
  )
  
}
function Country(props){
  return(
    <div style={{border:'10px solid red', borderRadius:'20px' ,margin:'10px'}}>
      <h1>Name : {props.name}</h1>
      <h4>Population: {props.population}</h4>
      <p>currencies : {props.area}</p>
    </div>
  )
}

export default App
