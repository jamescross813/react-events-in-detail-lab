// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component{

    handleClick = (event) =>{
        let coordinateArray = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coordinateArray)
    }

    render(){
        return <button onClick={this.handleClick}>Coordinate Button</button>
    }

}

export default CoordinatesButton