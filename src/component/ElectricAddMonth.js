import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addElectricThisMonth } from '../redux/action/index'

class ElectricAddMonth extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.rooms
  }
  render() {
    console.log(this.state)
    return (
      <div>
        {
          this.state.room.map(doc => {
            return (
              <div key={doc.name} className="row">
                <span className="col-4">{doc.name}</span>
                <span className="col-3">{doc.electric.old}</span>
                <input className="col-4" />
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    rooms: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addElectricThisMonth: (name, date, value) => {
      return dispatch(addElectricThisMonth(name, date, value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ElectricAddMonth)