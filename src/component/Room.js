import React, { Component } from 'react'

class Room extends Component {

  onPay = () => {
    this.setState({
      status: !this.state.status
    })
  }
  constructor(props) {
    super(props)
    const data = this.props.data;
    this.state = {
      name: data.name,
      status: data.status,
      roomPay: data.roomPay,
      date: data.date,
      water: {
        old: data.water.old,
        new: data.water.new
      },
      electric: {
        old: data.electric.old,
        new: data.electric.new
      },
      other: data.other,
      otherTotal: data.otherTotal
    }
    this.totalPay = this.calculateTotalPay()
  }

  calculateTotalPay = () => {
    var water = (this.state.water.new - this.state.water.old) * 25
    water = water < 100 ? 100 : water

    var fire = (this.state.electric.new - this.state.electric.old) * 8
    fire = fire < 100 ? 100 : fire

    return this.state.roomPay + fire + water + this.state.otherTotal
  }
  render() {
    return (
      <div className="card">
        <button className="btn" style={{
          backgroundColor: this.state.status ? "green" : "red"
        }} data-toggle="collapse" data-target={"#showDetail" + this.state.name} aria-expanded="false" aria-controls={"showDetail" + this.state.name}>
          <h3>{this.state.name}</h3>
        </button>
        <div className="collapse" id={"showDetail" + this.state.name}>
          <div className="card-body">
            <div className="row">
              <span className="col-9">ค่าห้อง</span>
              <span className="col-3">{this.state.roomPay}</span>
            </div>
            <div className="row">
              <span className="col-5">น้ำ</span>
              <span className="col-2">{this.state.water.old}</span>
              <span className="col-2">{this.state.water.new}</span>
              <span className="col-3">{(this.state.water.new - this.state.water.old) * 25}</span>
            </div>
            <div className="row">
              <span className="col-5">ไฟ</span>
              <span className="col-2">{this.state.electric.old}</span>
              <span className="col-2">{this.state.electric.new}</span>
              <span className="col-3">{(this.state.electric.new - this.state.electric.old) * 8}</span>
            </div>
            {
              this.state.other.map(doc => {
                return (
                  <div className="row">
                    <span className="col-9">{doc.type}</span>
                    <span className="col-3">{doc.value}</span>
                  </div>
                )
              })
            }
            <hr></hr>
            <div className="row">
              <span className="col-9">รวม</span>
              <span className="col-3">{this.totalPay}</span>
            </div>
          </div>
          <div className="card-footer">
            <button className="float-left" onClick={() => this.onPay()}>จ่ายแล้ว</button>
            <span className="float-right" style={{ color: "#8A8A8A" }}>{this.state.date}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Room