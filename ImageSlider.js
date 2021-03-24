import SwiftSlider from 'react-swift-slider'
import React from 'react'

function ImageSlider() {



    const data =  [
        {'id':'1','src':'https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'},
        {'id':'2','src':'https://imagicbaroda.com/wp-content/uploads/2020/10/iphone-12-pro-banner-1.jpg'},
        {'id':'3','src':'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/V_Day_Flip/Header/AF_PC_header.jpg'},
        {'id':'4','src':'https://cdn.opstatics.com/store/20170907/assets/images/events/2018/819/specs/specs_banner.jpg'},
        {'id':'5','src':'https://odishabytes.com/wp-content/uploads/2021/03/amazon-prime1.jpg'}
      ];
    return (
        <div className = 'ImageSlider'> 
             <SwiftSlider data={data} height= {630}/>
        </div>
    )
}

export default ImageSlider
