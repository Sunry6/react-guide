import React from 'react'
import './App.css'

interface AaaProps {
  name: string
  content: React.ReactNode
}

const Aaa: React.FunctionComponent<AaaProps> = props => {
  return (
    <div>
      aaa, {props.name}
      {props.content}
    </div>
  )
}

function App() {
  return (
    <>
      <Aaa name='test' content={<button>btn</button>} />
    </>
  )
}

export default App
