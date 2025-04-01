import { useLayoutEffect, useState } from 'react'
import './App.css'

async function queryData() {
  const data = await new Promise<number>(resolve => {
    setTimeout(() => {
      resolve(666)
    }, 2000)
  })

  return data
}
function App() {
  const [num, setNum] = useState(0)

  useLayoutEffect(() => {
    queryData().then(data => {
      setNum(data)
    })
  }, [])

  return (
    <>
      <button onClick={() => setNum(prevNum => prevNum + 1)}>{num}</button>
    </>
  )
}

export default App
