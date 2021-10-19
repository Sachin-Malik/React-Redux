import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux/index'


function IceCreamContainer(props) {
    return (
        <div>
            <h1>Number of Cakes - {props.numberOfIceCream}</h1>
            <button onClick={props.buyIceCream}>Buy IceCream</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numberOfIceCream:state.iceCream.numberOfIceCream
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: () => {
            dispatch(buyIceCream());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)
