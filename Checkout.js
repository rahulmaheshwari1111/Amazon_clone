import React from 'react'
import {ImSad2} from 'react-icons/im'
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct'
import './Checkout.css'
import Subtotal from './Subtotal';

const Checkout=() =>{
    
const [{basket}] = useStateValue();


    return (
        <div className ='checkout'>
            <div className='checkout__left'>
            <img className = 'checkout__ad' src = 'https://offerscouponsdeals.in/blog/wp-content/uploads/2018/12/Top_banner_PC_NewGirl.jpg' alt =""/>

{/* some ternary checks for cart value and the required message */}
{basket?.length === 0 ? (
<div>
   <h2> Your Cart is Empty <ImSad2 /></h2>
   <p> OOps! looks like you need to go to home page and then continue shopping </p>
   
    </div>)
    :
    ( <div> <h2 className = "checkout__title"> Your Shopping cart</h2>
    
    {/*  list all the checkout products we will create a new checkout component here */}
    {basket?.map(item =>(<CheckoutProduct 
    id = {item.id}
    title = {item.title}
    image = {item.image}
    price = {item.price}
    rating = {item.rating}
    />))}
    
    
    </div>  
)}


            </div>
            {basket.length > 0 && ( <div className = 'checkout__right'> 
            <Subtotal/> </div>)}
        </div>
    )
}

export default Checkout
