import React from 'react'
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logout, selectIsAdmin } from '../../features/login/loginSlice';
import { currentShop } from '../../features/shop/shopSlice';
import './Home.css'
import Header from "../../components/Header/Header";
import Button from 'react-bootstrap/Button';
function HomeScreen() {
    const dispatch = useDispatch()
    const shops = useSelector(state => state.shop.shops)
    const isAdmin = useSelector(selectIsAdmin)
    return (

        <div className="home__container">
            {isAdmin ? shops?.map(item => (
                <Card >
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                    <Button variant="primary" onClick={() => {
                    dispatch(currentShop(item.id))}} style={{ width: '40rem',marginTop:"0.1rem"}}>Go somewhere</Button>
                </Card.Body>
              </Card>

            )) : <Header/>}

             
        </div>
    )
}

export default HomeScreen
