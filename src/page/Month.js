import React, { Component } from 'react'
import ElectricAddMonth from '../component/ElectricAddMonth'
import WaterAddMonth from '../component/WaterAddMonth'

class Month extends Component {
  state = {
    select: "no"
  }
  electric = () => {
    if (this.state.select === "Electric") {
      return (<ElectricAddMonth />)
    }
    return null
  }
  water = () => {
    if (this.state.select === "Water") {
      return (<WaterAddMonth />)
    }
    return null
  }
  render() {
    return (
      <div>
        <button onClick={() => { }}>Update This Month</button>
        <button onClick={() => { this.setState({ select: "Electric" }); console.log(this.state.select) }}>Electric</button>
        <button onClick={() => { this.setState({ select: "Water" }); console.log(this.state.select) }}>Water</button>
        {this.electric()}
        {this.water()}
      </div>
    )
  }
}

export default Month