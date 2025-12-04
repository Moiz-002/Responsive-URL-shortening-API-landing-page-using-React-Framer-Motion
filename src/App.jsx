import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ShorterLinkForm from './components/ShorterLinkForm'
import Footer from './components/Footer'
import StatisticsSection from './components/StatisticsSection'

const App = () => {
  return (
    <div className="mx-auto w-full flex justify-center flex-col">
      <Header/>
      <HeroSection/>
      <StatisticsSection/>
      <Footer/>
    </div>
  )
}

export default App
