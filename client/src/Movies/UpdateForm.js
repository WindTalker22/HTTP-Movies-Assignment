import React, { useState } from "react"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"
import { useSelector, useDispatch } from "react-redux"
import { FORM_CHANGE } from "../reducer"
import { editMovie } from "../actions"

const UpdateForm = props => {
  const dispatch = useDispatch()
  const movie = useSelector(state => state.movie)
  const [actor, setActor] = useState({ actor: "" })

  const actorChange = e => {
    e.preventDefault()
    setActor({ ...actor, [e.target.name]: e.target.value })
  }

  const handleChange = e => {
    e.preventDefault()
    dispatch({ type: FORM_CHANGE, name: e.target.name, value: e.target.value })
  }

  const handleStarChange = e => {
    e.preventDefault()
    dispatch({ type: "STAR_CHANGE", payload: actor.actor })
    setActor({ actor: "" })
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(editMovie(movie, props.match.params.id))

    setTimeout(() => {
      props.history.push("/")
    }, 1000)
  }

  return (
    <div className="update-form">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>
            <p>Title</p>
            <Input
              type="text"
              name="title"
              value={movie.title}
              placeholder="Title"
              onChange={handleChange}
            />
          </Label>
          {console.log(props)}
          <Label>
            <p>Director</p>
            <Input
              type="text"
              name="director"
              value={movie.director}
              placeholder="Director"
              onChange={handleChange}
            />
          </Label>
          <Label>
            <p>Metascore</p>
            <Input
              type="text"
              name="metascore"
              value={movie.metascore}
              placeholder="Metascore "
              onChange={handleChange}
            />
          </Label>
          <Label>
            <p>Actor</p>
            <Input
              type="text"
              name="actor"
              value={actor.actor}
              placeholder="Stars"
              onChange={actorChange}
            />
          </Label>
          <Button onClick={handleStarChange}>Add</Button>
          <Button>Submit</Button>
        </FormGroup>
      </Form>
    </div>
  )
}

export default UpdateForm
