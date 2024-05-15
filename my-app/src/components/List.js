import React, { Component } from 'react'

class List extends Component {
  render() {
    return (
        this.props.list.map(item =>
            <li key={item.toString()}>{item}</li>
        )
    )
  }
}

export default List