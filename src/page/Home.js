import React, { Component } from 'react'
import Room from '../component/Room'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    return (
      <div>
        {
          this.props.rooms.room.map(doc => {
            return <Room key={doc.name} data={doc} />
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

export default connect(mapStateToProps, null)(Home)