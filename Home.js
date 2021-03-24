
import React from 'react'
import Footer from './Footer'

import './Home.css'
import ImageSlider from './ImageSlider'
import Product from './Product'
function Home() {
    return (
        <div className = 'home'>
          
            {/* <img  className = "home__image" src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt = ""/> */}
<div className = "home__image"> 
<ImageSlider/></div>

            {/* Product  id ,title,price, rating,img  */}
            {/* product */}
            <div className = 'home__row'>
            <Product id= '12345' 
            title = 'Sony a7 III ILCE7M3/B Full-Frame Mirrorless Interchangeable-Lens Camera with 3-Inch LCD, Mirrorless Interchangeable-Lens Camera '
            price = {11.96} 
            rating= {5} 
            image = 'https://www.awesomedynamic.com/wp-content/uploads/2018/02/awesome-dynamic-amazon-product-photography-camera.png'/>



        <Product id= '12346' 
            title=' Echo Dot (3rd Gen) - Smart speaker with Alexa - Sandstone Sengled Bluetooth bulb'
            price = {10.96} 
            rating= {4} 
            image = 'https://media.4rgos.it/i/Argos/8656353_R_Z001A?w=750&h=440&qlt=70'/>

            </div>

            {/* 2nd row of products */}
            <div className = 'home__row'>
            <Product id= '12347' 
            title = 'RITS Health Care Product High Protein Body Plus Mass Gainer Supplement Powder Chocolate -1 kg ( 2.2 LBS )'
            price = {9.96} 
            rating= {3} 
             image = 'https://images-na.ssl-images-amazon.com/images/I/51ozRRwOqTL._SY450_.jpg'/>



        <Product id= '12348' 
            title= 'Amazon-firestick(3rd Gen)- Inbuilt Features (bluetooth)- Netflix Subscription'
            price = {10.96} 
            rating= {4} 
            image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMIhcE1807gxryqODviHJlTdzYILqT2-kmAA&usqp=CAU'/>



             <Product id= '12349' 
            title='Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management & Skin Temperature Trends, Carbon/Graphite, One Size (S & L Bands Included)'
            price = {10.96} 
            rating= {4} 
            image = 'https://m.media-amazon.com/images/I/71wEvOoTCvL._AC_UL320_.jpg'/>

            </div>



            {/* 3rd row of products */}
            <div className = 'home__row'>
            <Product id= '12350' 
            title = 'Pedigree Dentastix Medium Breed (10-25 kg) Oral Care Dog Treat, 180g Weekly Pack (7 Chew Sticks)'
            price = {5.96} 
            rating= {5} 
             image = 'https://m.media-amazon.com/images/I/41g6+yCta3L.jpg'/>



        <Product id= '12351' 
            title= 'Projector, GooDee 2021 Upgrade HD Video Projector Outdoor Movie Projector, 230" Home Theater Projector , Compatible with Fire TV Stick, PS4,  Black (YG600)'
            price = {30.96} 
            rating= {4} 
            image = 'https://images-na.ssl-images-amazon.com/images/I/71hxrkRsX4L._AC_SY355_.jpg'/>



            

            </div>
            
        </div>
    )
}

export default Home
