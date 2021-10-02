// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component{


    handleClick = (event) =>{
        event.persist()
        this.props.onDelayedClick(event)
    }

    render(){
        return <button onClick={this.handleClick}>Delay Click</button>
    }
}


export default DelayedButton