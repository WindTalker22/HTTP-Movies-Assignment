import React, { useState } from "react"
import { Route, Switch } from "react-router-dom"
import SavedList from "./Movies/SavedList"
import MovieList from "./Movies/MovieList"
import Movie from "./Movies/Movie"
import UpdateForm from "./Movies/UpdateForm"

const App = () => {
  const [savedList, setSavedList] = useState([])

  const addToSavedList = movie => {
    setSavedList([...savedList, movie])
  }

  return (
    <>
      <SavedList list={savedList} />
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/update-movie/:id" component={UpdateForm} />
        <Route
          path="/movies/:id"
          render={props => {
            return <Movie {...props} addToSavedList={addToSavedList} />
          }}
        />
      </Switch>
    </>
  )
}

export default App
