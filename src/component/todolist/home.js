import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../../action/action'

class Home extends Component{
  constructor(props){
    super(props);
    console.log("constructor");
  }

  componentWillMount(){
    console.log("componentWillMount");
  }

  componentDidMount(){
    console.log("componentDidMount");
    //this.props.increase(1);
  }

  componentWillReceiveProps(nextProps){
    console.log("componentWillReceiveProps: " + JSON.stringify(nextProps));
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
    return true;
  }

  componentWillUpdate(nextProps, nextState){
    console.log("componentWillUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
  }

  componentDidUpdate(prevProps, prevState){
    console.log("componentDidUpdate: " + JSON.stringify(prevProps) + " " + JSON.stringify(prevState));
  }

  componentWillUnmount(){
    console.log("componentWillUnmount");
  }

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
