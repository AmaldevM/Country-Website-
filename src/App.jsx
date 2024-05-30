import { useEffect, useState } from 'react'
import Card from './Card'
import './App.css'

function App() {
  const [listOfCountries,setCountries]=useState([])
 
  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(response=>response.json())
    .then(data=>{
      const countryArr=data.map(country=>(
        {
          "name" : country.name.common,
          "flagUrl": country.flags.png
        }
      ))
      countryArr.sort((a,b)=>{
        if (a.name > b.name){
          return 1
        }
        if (a.name < b.name){
          return -1
        }
      })
      setCountries(countryArr)
    })
  })
  return (
    <>
    <header>
    </header>
      <main>
        <div className="countries-container">
          {
            
            listOfCountries.map(country=><Card countryName={country.name} flag={country.flagUrl}/>)
            }
          
        </div>
      </main>
      <footer></footer>
    </>
  )
}

export default App
