import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const newOpacity = this.props.opacity;
    if (this.props.opacity >= 0.2){
      return (
        <div className="color-box" style ={{opacity: newOpacity}}>
          <ColorBox opacity={newOpacity - 0.1} />
        </div>

      );
    } else {
      return null;
    }
  }

}
