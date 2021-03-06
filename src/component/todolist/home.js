import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increase, decrease, list } from '../../action/action'

class Home extends Component{
  constructor(props){
    super(props);
    console.log("constructor");
  }

  // componentWillMount(){
  //   console.log("componentWillMount");
  // }
  //
  // componentDidMount(){
  //   console.log("componentDidMount");
  //   this.props.list(1);
  // }
  //
  // componentWillReceiveProps(nextProps){
  //   console.log("componentWillReceiveProps: " + JSON.stringify(nextProps));
  // }
  //
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log("shouldComponentUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
  //   return true;
  // }
  //
  // componentWillUpdate(nextProps, nextState){
  //   console.log("componentWillUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
  // }
  //
  // componentDidUpdate(prevProps, prevState){
  //   console.log("componentDidUpdate: " + JSON.stringify(prevProps) + " " + JSON.stringify(prevState));
  // }
  //
  // componentWillUnmount(){
  //   console.log("componentWillUnmount");
  // }

  render (){

    const {userlist, number, increase, decrease, list} = this.props;
    const listItems = userlist.map((user,c) =>
      <li key={user._id}>{c+' '+user.userid}</li>
    );

    return(
      <div>
        Some state changes:
        {number}<br/>
        <button onClick={() => increase(1) }>Increase</button>
        <button onClick={() => decrease(1)}>Decrease</button>
        <button onClick={() => list(1)}>list</button>
        <br/>
        <ul>{listItems}</ul>
      </div>
    );

  }
}

export default connect(
  state => {
    console.log("state");
    return ( {number: state.update.number,userlist:state.update.list }) }
  ,
  dispatch => {
    return {
      increase : (n) => dispatch(increase(n)),
      decrease : (n) => dispatch(decrease(n)),
      list : (n)=> dispatch(list(n))
    }
  }
)(Home)
