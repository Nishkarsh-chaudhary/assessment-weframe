import React from 'react'
import Navigator from './Components/Navigator/Navigator'
import Filter from './Components/Filter/Filter'
import CardList from './Components/Cardlist/CardList'
import Buleten from './Components/Buleten/Buleten'


const Home = () => {
  return (
    <div>
     <Navigator />  
     <Buleten />
     <Filter />
     <CardList />
    </div>
  )
}

export default Home
