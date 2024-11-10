import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios'

function App() {
  const [keyObjectives, setKeyObjectives] = useState("")
  const [response, setResponse] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(keyObjectives)
    axios.post('http://localhost:3000/final', {
      keyObjectives
    })
      .then((response) => {
        console.log(response)
        setResponse(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Key Objectives</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter key objectives"
            value={keyObjectives}
            onChange={(e) => setKeyObjectives(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit} >
          Submit
        </Button>
        <div>
          {JSON.stringify(response)}
        </div>
      </Form>

    </>
  )
}

export default App
