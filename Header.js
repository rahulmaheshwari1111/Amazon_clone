import React from 'react'
import {Link} from 'react-router-dom'

import { SearchOutlined } from '@ant-design/icons'
import './Headers.css'


import {AiTwotoneShopping} from 'react-icons/ai'
import { useStateValue } from './StateProvider'
import Toolbar from './Drawer/Toolbar'

//  import SearchIcon from "@material-ui/icons/Search";

function Header(props) {
  console.log('header', props)

const [{basket}] = useStateValue()
console.log(basket)


    return (
      <div className= 'spacer'>
        <nav className= 'header'>
            {/* logo on left */}
            
            <Link to = '/'>
<img className = "header__logo" src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt =""/></Link>


            {/* search box */}
<div className = 'header__search'>
            <input type = 'text' className = 'header__searchInput'/>
            <SearchOutlined className = "header__searchIcon" /></div>
             
            {/* 3links  signin   orders  account*/}

<div className = "header__nav">
  {/* 1st link */}
<Link to = '/login' className = "header__link">
<div className = "header__option">
<span className= "header__option1"> hello</span>
<span className= "header__option2"> Signin</span>
</div>
</Link>



{/* 2nd link */}

<Link to = '/login' className = "header__link">
<div className = "header__option">
<span className= "header__option1"> returns</span>
<span className= "header__option2"> orders</span>
</div>
</Link>







{/* 3rd link */}


<Link to = '/login' className = "header__link">
<div className = "header__option">
<span className= "header__option1"> Your</span>
<span className= "header__option2"> Prime</span>
</div>
</Link>





<Link to = '/checkout' >
  <div className= "header__optionBasket">

{/* shopping basket icon */}

<AiTwotoneShopping className = "header__basket"/>

{/* orders count */}
<span className= 'header__option2'>{basket?.length} </span>  
  </div>






</Link>
</div>

            {/* basket */}
        </nav>
        <Toolbar/></div>
        
    )
}

export default Header
