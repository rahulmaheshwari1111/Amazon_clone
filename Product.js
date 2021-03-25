import React from 'react'
import './Product.css'
import{AiTwotoneStar} from 'react-icons/ai'
import { useStateValue } from './StateProvider'
function Product({id,title,image,rating,price}) {

const [{basket},dispatch] = useStateValue();
const addToBasket=()=>{
//add item to basket using dispatch

dispatch({

    type:'ADD_TO_BASKET',
    item:{

        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
    },
})




}




    return (
        <div className = 'product'>
            <div className = 'product__info'>
<p>{title}</p>


<p className = 'product__price'>
<small>$</small>
<strong> {price}</strong>
</p>


<div className = 'product__rating'>
{Array(rating).fill().map((_)=>(<p> <AiTwotoneStar color = '#f0c14b'/> </p>

))

}

</div>
</div>
<img className ="image"src = {image} alt =""/>
<button onClick={addToBasket}> Add to cart</button>
            
        </div>
    )
}

export default Product
 