export const fetchData = () => dispatch => {
  dispatch({
    type: 'REQUEST_DATA',
  })

  return fetch('https://thewirecutter.com/wp-json/wp/v2/posts')
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: 'RECEIVE_DATA',
        payload: data,
      })
    })
    .catch(error => {
      dispatch({
        type: 'DATA_ERROR',
        payload: error,
      })
    })
}
