import { ChangeEvent, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState('test')
  console.log('render')
  function onChange(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value)
    setValue(event.target.value)
  }

  useEffect(() => {
    setTimeout(() => {
      console.log('ref: ', inputRef.current?.value)
    }, 2000)
  }, [])

  return (
    <div>
      <input value={value} onChange={onChange} placeholder='input' ref={inputRef} />
      
    </div>
  )
}

export default App
