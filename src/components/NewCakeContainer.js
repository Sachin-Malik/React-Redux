import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/index'


function NewCakeContainer(props) {
    const [cakeCount, setCakeCount] = useState(1);

   
    return (
        <div>
            <h1>Number of Cakes - {props.numberOfCakes}</h1>
            <input
                type="text"
                placeholder="Please Enter No. Of Cakes You Want to buy "
                value={cakeCount}
                onChange={(e)=>setCakeCount(e.target.value)}
            />
            <button onClick={()=>props.buyCake(cakeCount)}>Buy {cakeCount} Cake</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numberOfCakes:state.cake.numberOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: (cakeCount) => {
            dispatch(buyCake(cakeCount));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)
