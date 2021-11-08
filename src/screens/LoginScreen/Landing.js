import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'

import logo from '../../assets/images/tenor.gif'
import { fetchShops } from '../../features/shop/shopSlice'
import './Landing.css'
function Landing() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchShops())
        
    }, [])
    
    return (
        
        <div className="container__landing">
                <img src={logo} className="logo__image"/>
        </div>
    )
}

export default Landing
