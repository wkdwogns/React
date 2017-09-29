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

export function list(path,obj) {

  return (dispatch) => {

    fetch('http://localhost:3001'+path,{
      method: 'post',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(obj)
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data){
      dispatch({
        type: 'LIST',
        list: data
      });
    });
  };
}

export function update(path,obj) {

  return (dispatch) => {

    fetch('http://localhost:3001'+path,{
      method: 'post',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(obj)
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
        dispatch( {
          type: 'UPDATE',
          list: data
        })
    });
  };
}

export function show(path,obj) {

  return (dispatch) => {

    fetch('http://localhost:3001'+path,{
      method: 'post',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(obj)
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
        dispatch( {
          type : 'SHOW',
          info : data
        })
    });
  };
}
