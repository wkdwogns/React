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
    const listItems = userlist.map((user) =>
      <li key={user._id}>{user.id}</li>
    );

    return(
      <div>
        Some state changes:
        {number}
        <button onClick={() => list(1) }>Increase</button>
        <button onClick={() => decrease(1)}>Decrease</button>
        <br/>
        <ul>{listItems}</ul>
      </div>
    );

  }
}

export default connect(
  state => {
    console.log("state");
    return ( {number: state.update.number,userlist:state.update.userlist }) }
  ,
  dispatch => {
    console.log(list);
    return {
      increase,
      decrease,
      list : (n)=> dispatch(list(n))
    }
  }
)(Home)
