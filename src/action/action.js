const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'

export function increase(n) {
  console.log("action");
  return {
    type: INCREASE,
    amount: n
  }
}

export function decrease(n) {
  return {
    type: DECREASE,
    amount: n
  }
}

export function list(n) {
  console.log(n);
  return (dispatch) => {

    fetch('http://localhost:3000/users')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
        console.log(data);
        dispatch( {
          type: 'LIST',
          userlist: data,
          amount: 1,
          data
        })
    });

  };


}

// function add(data) {
//   console.log("add");
//   return {
//     type: 'LIST',
//     userlist: data,
//     amount: 1,
//     data
//   }
// }
