import React, { Component } from 'react'

class Lifecycle_1 extends Component {
    // Mounting Methods
    constructor(props) {
        super(props)
        this.state = {
            like: 0,
            name:'Constructors',
        }
        // console.log("Constructor")
    }
    
    static getDerivedStateFromProps(props, state) {
        // return {statefromporps: props.statename}
        // console.log("getDerivedStateFromProps", this.state.statefromporps)
        return null
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({name: "This is a componentDidMount method" })
        }, 3000)
        console.log("componentDidMount")
    }
    
    // Update Methods
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate" )
        if(this.props.statename !== "I'm State From App.js")
            return false
        else
            return true
        // return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById('previous_state').innerHTML = "Prev State : " + prevState.name
        console.log("getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate")
        if(prevState.name === this.state.name)
            document.getElementById('current_state').innerHTML = " " 
        else
            document.getElementById('current_state').innerHTML = "Current State : " + this.state.name
    }

    // Unmount Method
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
    increment = () => {
        this.setState({
            like: this.state.like + 1
        })
    }
    decrement = () => {
        this.setState({
            like: this.state.like - 1
        })
        // console.log("Decrement Like : ", this.state.like)
    }
    render() {
        // console.log("render()")
        return (
            <div>
                {/* {this.state.name} */}
                {/* {this.state.like} */}
                <p id="stateFromProps"><b>Props : </b>{this.props.statename}</p>
                <p id="previous_state"> {this.state.name}</p>
                
                <p id="current_state"></p>
                 
                <p id="likesChange"><b>#LIKES : </b>{this.state.like}</p>

                <div>
                    <button onClick={this.increment} className="button"> Increment </button>
                    <button onClick={this.decrement} className="button"> Decrement </button>
                </div>
            </div>
        )
    }
}

export default Lifecycle_1