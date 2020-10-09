import React from 'react'
import AliadosCarousel from './Carousels/AliadosCarousel'
import AliadosFull from '../images/aliados.png'

const Aliados = () => {
    let isMobile = window.matchMedia('(max-width: 600px)').matches
    return (
        <div style={{order: '10', width: '100%'}}>
            <p className="aliados-title">ALIADOS ESTRATÉGICOS</p>
            {!isMobile && <img src={AliadosFull} alt="" style={{display: 'block', margin: 'auto', marginTop:'2rem', width:'90%'}}/>}
            {isMobile && <AliadosCarousel/>}
        </div>
    )
}

export default Aliados
