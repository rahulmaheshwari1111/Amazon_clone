import React from 'react'
import './CheckoutProduct.css'
import Subtotal from './Subtotal'
import{AiTwotoneStar} from 'react-icons/ai'
import {useStateValue} from './StateProvider'



function CheckoutProduct({id,title,rating,image,price}) {
const [{basket},dispatch] = useStateValue()
const removeFromCart=()=>{
    //remove item
    dispatch({
        type:"REMOVE_FROM_BASKET",    // check reducer.js //dispatching an  action
        id:id,
    })


}



    return (
        <div className ="checkoutProduct">
            <div className= 'checkoutProduct__left'>
            <img className = 'checkoutProduct__image' src = {image} alt = ''/>
            <div className = "checkoutProduct__info">
                <p className = 'checkoutProduct__title'> {title}</p>
                <p className = 'checkoutProduct__price'> <small>$</small> <strong> {price}</strong></p>


                <div className= 'checkoutProduct__rating'>

                {Array(rating).fill().map((_)=>(<p> <AiTwotoneStar color = '#f0c14b'/> </p>

))

}

                </div>
                <button onClick = {removeFromCart}> Remove From Cart</button>
            </div>
            </div>
           
            
        </div>
    )
}

export default CheckoutProduct
