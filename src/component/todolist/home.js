import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../../action/action'

class Home extends Component{
  render (){
    const {number, increase, decrease} = this.props;
    console.log(this);
    return(
      <div>
        Some state changes:
        {number}
        <button onClick={() => increase(1)}>Increase</button>
        <button onClick={() => decrease(1)}>Decrease</button>
      </div>
    );

  }
}

export default connect(
  state => ( {number: state.update.number }),
  { increase, decrease }
)(Home)
