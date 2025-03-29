import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

// interface Action {
//   type: 'add' | 'minus'
//   num: number
// }

// function reducer(state: number, action: Action) {
//   switch (action.type) {
//     case 'add':
//       return state + action.num
//     case 'minus':
//       return state - action.num
//     default:
//       return state
//   }
// }

function useInterval(fn: () => void, time: number) {
  const ref = useRef(fn)
  ref.current = fn
  const cleanUpFnRef = useRef(() => {})
  const clean = useCallback(() => {
    cleanUpFnRef.current?.()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      ref.current()
    }, time)

    cleanUpFnRef.current = () => clearInterval(timer)

    return clean
  }, [])

  return clean
}

function App() {
  const [count, setCount] = useState(0)
  // const [count, dispatch] = useReducer(reducer, 0)
  const updateCount = () => {
    setCount(prev => prev + 1)
  }

  useInterval(updateCount, 1000)

  // useEffect(() => {
  //   // useEffect的依赖数组是[]，也就是只会执行并保留第一次的function，而第一次的function引用的是最开始的count，形成了闭包，所以console.log(count)会一直打印0
  //   //方法一是使用setCount的回调函数，回调函数的参数是最新的count
  //   // 方法二是使用useReducer，useReducer会返回最新的state
  //   // 方法三是使用timer的回调函数，timer的回调函数会返回最新的count
  //   console.log(count)

  //   const timer = setInterval(() => {
  //     // console.log(count)
  //     // setCount(count => count + 1)
  //     // dispatch({ type: 'add', num: 1 })

  //     setCount(count + 1)
  //   }, 1000)

  //   return () => {
  //     clearInterval(timer)
  //   }
  // }, [count])

  return (
    <>
      <div>{count}</div>
    </>
  )
}

export default App
