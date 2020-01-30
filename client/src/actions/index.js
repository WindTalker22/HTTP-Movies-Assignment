import axios from "axios"

export const editMovie = (movie, id) => dispatch => {
  dispatch({ type: "DATA_START" })

  axios
    .put(`http://localhost:5000/api/movies/${id}`, movie)
    .then(
      res =>
        console.log(res, "Hi from the put then") &
        dispatch({ type: "DATA_SUCCESS", payload: res.data })
    )
    .catch(
      err =>
        console.log(err, "Hi from the put catch") &
        dispatch({ type: "DATA_FAILURE", payload: err })
    )
}
export const deleteMovie = id => dispatch => {
  dispatch({ type: "DATA_START" })

  axios
    .delete(`http://localhost:5000/api/movies/${id}`)
    .then(
      res =>
        console.log(res, "Hi from the put then") &
        dispatch({ type: "DATA_SUCCESS", payload: res.data })
    )
    .catch(
      err =>
        console.log(err, "Hi from the put catch") &
        dispatch({ type: "DATA_FAILURE", payload: err })
    )
}
