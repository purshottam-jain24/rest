import React from 'react'
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Qualities from '../components/Qualities';
import Reservation from '../components/Reservation';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import WhoAreWe from '../components/WhoAreWe';
import Team from '../components/Team';
const Home = () => {
  return (
    <>
      <HeroSection/>
      <About/>
      <Menu/>
      <Reservation/>
      <Qualities/>
      <WhoAreWe/>
       <Team/>
      <Footer/>
    </>
  )
}

export default Home;