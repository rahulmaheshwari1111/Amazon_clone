import React from 'react'
import { FacebookOutlined,TwitterOutlined,InstagramOutlined,WhatsAppOutlined } from '@ant-design/icons'
import "./Footer.css"
function Footer() {
    return (
        <div className = "Footer">
            <div className = "Footer__C1">
<ul><li> <strong> Get to know us</strong> </li> 
<li> About us</li> <li> career </li> <li>Press Release </li> <li> Amazon cares</li></ul>


            </div>


            <div className = "Footer__C2">
            <ul><li> <strong> Connect With us</strong> </li> 
<li> <FacebookOutlined /></li> <li> <TwitterOutlined /></li> <li><InstagramOutlined /></li> <li> <WhatsAppOutlined /></li></ul>
            </div>
            <div className = "Footer__C3">
            <ul><li> <strong> Make money with us</strong> </li> 
<li> Sell with Amazon</li> <li> Join as a affilitate </li> <li>Amazon global selling </li> <li> Advertise your products</li>
<li>Amazon pay on merchants</li> <li> Amazon Prime</li></ul>


            </div>
            <div className = "Footer__C4">
            <ul><li> <strong> Let us help you</strong> </li> 
<li>Covid-19 and Amazon</li> <li> 100% trustpay </li> <li>Amazon app download </li> <li> Amazon assists</li></ul>


            </div>
        </div>
    )
}

export default Footer
