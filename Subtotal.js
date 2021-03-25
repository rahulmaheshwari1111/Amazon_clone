import React from 'react'
import "./Subtotal.css"
import { useStateValue } from './StateProvider'
function Subtotal() {
    const [{price}] = useStateValue()
    
    return (
        <div className = 'subtotal'>
            <h1>Subtotal = ${{price}? price.reduce((a,b) => a + b, 0): 0 }</h1>
            <small className = "subtotal__gift"><input type = 'checkbox'/> This order contains a gift</small>
            <button> Proceed to checkout</button>
            
        </div>
    )
}

export default Subtotal
