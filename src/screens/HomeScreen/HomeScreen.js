import React,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logout, selectIsAdmin } from '../../features/login/loginSlice';
import { currentShop } from '../../features/shop/shopSlice';
import './Home.css'
import Header from "../../components/Header/Header";
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router';
function HomeScreen() {
    const dispatch = useDispatch()
    const history = useHistory()
    const shops = useSelector(state => state.shop.shops)
    const isAdmin = useSelector(selectIsAdmin)
    const [search, setSearch] = useState(true)
    return (

        <div className="home__container">
            {isAdmin && search ? shops?.map(item => (
                <Card >
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                    <div style={{display:"flex" ,flexDirection:"column"}}>
                    <Button variant="primary" onClick={() => {
                    dispatch(currentShop(item.id))
                    history.push('employee/')
                    }} style={{ width: '20rem',marginTop:"0.1rem"}}>Add Employee</Button>
                    <Button variant="primary" onClick={() => {
                    dispatch(currentShop(item.id))
                    setSearch(false)
                    }} style={{ width: '20rem',marginTop:"0.4rem"}}>Create Order</Button>
                    </div>
                </Card.Body>
              </Card>

            )) : <Header/>}

             
        </div>
    )
}

export default HomeScreen
