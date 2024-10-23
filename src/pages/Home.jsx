import React from 'react'
import Hero from '../components/Hero'
import MarqueeSection from '../components/MarqueSection'
import CarouselSection from '../components/CarouselSection'
import BestSellersSection from '../components/BestSellerSection'
import BenefitsSection from '../components/BenifitsSection'
import ProductSection from '../components/ProductSection'
import GummySpotlight from '../components/SpotlightSection'
import CustomerReviews from '../components/CustomerReviews'
import FounderMessage from '../components/FounderMessage'
import Footer from '../components/Footer'
function Home() {
  return (
    <div>
      <Hero/>
      <MarqueeSection/>
      <CarouselSection/>
      <BestSellersSection/>
      <BenefitsSection/>
      <ProductSection/>
      <GummySpotlight/>
      <CustomerReviews/>
      <FounderMessage/>
      <Footer/>
    </div>
  )
}

export default Home
