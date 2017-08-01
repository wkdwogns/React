const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'

export function increase(n) {
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

export function list(n,data) {

  return (dispatch) => {
    fetch('http://localhost:3000/users')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
        dispatch(add(data))
    });
  }


}

function add(data) {
  return {
    type: 'LIST',
    userlist: data,
    amount: 1,
    data
  }
}
