// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }

  handleChange = e => {
    // console.log(e.target.value)
    this.setState({ name: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    // console.log(this.state)
    this.props.addBand(this.state)
    this.setState({ name: '' })
  }

  render() {
    return (
      <div>
        {/* Band Input */}
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.name} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
