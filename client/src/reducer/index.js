export const FORM_CHANGE = "FORM_CHANGE"

const uuidv4 = require("uuid/v4")

const initialState = {
  isLoading: false,
  movies: [],
  error: {},
  movie: {
    id: uuidv4(),
    title: "",
    director: "",
    metascore: "",
    stars: []
  }
}
export default (state = initialState, action) => {
  switch (action.type) {
    case "DATA_START":
      return {
        ...state,
        isLoading: true
      }
    case "DATA_SUCCESS":
      return {
        ...state,
        isLoading: false,
        movie: action.payload
      }
    case "DATA_FAILURE":
      return {
        ...state,
        isLoading: false,
        movie: action.payload
      }
    case "FORM_CHANGE":
      return {
        ...state,
        movie: {
          ...state.movie,
          [action.name]: action.value
        }
      }
    case "STAR_CHANGE":
      return {
        ...state,
        movie: {
          ...state.movie,
          stars: [...state.movie.stars, action.payload]
        }
      }
    default:
      return state
  }
}
