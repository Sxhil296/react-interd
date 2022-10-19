import React, { Component } from 'react'
import './PageHeroStyles.css'

export class PagesHero extends Component {
  render() {
    return (
        <div className='page-hero'>
        <div className='page-hero-text-bg'>
     </div>
     <div className='page-hero-text'>
          <h1>
              {this.props.heading}
          </h1>
          <h4>{this.props.text}</h4>
      </div>
      <div className='page-hero-img-holder'>
          <img src={this.props.img} alt="heroImg"/>
      </div>
     
    </div>
    )
  }
}

export default PagesHero