import React, { Component } from 'react'
import './WhatWeDoPageStyles.css'

export class WhatWeDoPage extends Component {
  render() {
    return (
      <div className='whatWeDoPage-hero'>
        <div className="whatWeDoText">
            <h1>{this.props.title}</h1>
            <p>{this.props.para}</p>
        </div>
        <div className="whatWeDoImage">
            <img src={this.props.image} alt="work-img" />
        </div>
      </div>
    )
  }
}

export default WhatWeDoPage