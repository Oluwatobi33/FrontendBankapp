import React from 'react'
import Background from './Background'
import Download from './Download'
import Every from './Every'
import ExistingCust from './ExistingCust'
import Footer from './Footer'
import FootPrint from './FootPrint'
import NavBar from './NavBar'
import Product from './Product'
import Shop from './Shop'
import { useState, useEffect } from 'react'
const Home = () => {
  const [backTop, setbackTop] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setbackTop(true)
      } else {
        setbackTop(false)
      }
    })


  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <>
      <NavBar />
      <Background />
      <Every />
      <Shop />
      <Download />
      <ExistingCust />
      <Product />
      <FootPrint />
      <Footer />
      {Home && (
        <button className='border-0' style={{ position: "fixed", backgroundColor: "#18425D", color: "#FFFFFF", bottom: "50px", right: "50px", height: "50px", width: "50px", fontSize: "40px" }} onClick={scrollUp}>^</button>
      )}
    </>
  )
}

export default Home