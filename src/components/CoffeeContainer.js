import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { buyCoffee } from '../redux/index'

function CoffeeContainer() {
    const numberOfCoffee=useSelector((state)=>state.coffe.numberOfCoffee)
    const dispatch = useDispatch();
    
    return (
        <div>
          <h1>Number of Coffee - {numberOfCoffee}</h1>
          <button onClick={()=>dispatch(buyCoffee())}>Buy Coffee</button>  
        </div>
    )
}

export default CoffeeContainer
