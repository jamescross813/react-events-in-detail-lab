// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component{


    handleClick = (event) =>{
        const delayedEvent = event
        this.props.onDelayedClick(event)
    }

    render(){
        return <button onClick={this.handleClick(event.persist())}>Delay Click</button>
    }
}


export default DelayedButton