import React from 'react'
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { currentShop } from '../../features/shop/shopSlice';
import './Home.css'
function HomeScreen() {
    const dispatch = useDispatch()
    const shops = useSelector(state => state.shop.shops)
    return (
        <div className="home__container">
            {shops?.map(item => (
                <Card onClick={() => dispatch(currentShop(item.id))} style={{ width: '40rem',marginTop:"2rem"}}>
                <Card.Body style={{textAlign:'center',fontSize:'2rem',margin:'1rem'}}>{item.name}</Card.Body>
              </Card>

            ))}
             
        </div>
    )
}

export default HomeScreen
