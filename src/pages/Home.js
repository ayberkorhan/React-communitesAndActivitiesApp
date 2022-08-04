import React from 'react'
import Activitiess from '../components/Activitiess';
import Banner from '../components/Banner';
import Communities from "../components/Communities";
import Footer from '../components/Footer';
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
export default function Home() {
  return (
    <>
     <div class="bg-gray-900"
    >
    <Banner></Banner>
    <font color="white"> Topluluklar </font> 
    <Communities></Communities>
    <font color="white"> Etkinkikler </font> 
    <Activitiess></Activitiess>
    <Footer></Footer>
</div>
    </> 
     )
}
