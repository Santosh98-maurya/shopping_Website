import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import HeadingCategory from '../components/HeadingCategory'
import HeadingProducts from '../components/HeadingProducts'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
        <Announcement />
        <Navbar />
        <Slider />
        <HeadingCategory />
        <Categories />
        <HeadingProducts />
        <Products />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home
