// https://www.youtube.com/watch?v=gnkrDse9QKc

import * as React from "react"
import './Styles.css';
import axios from "axios"
// https://www.npmjs.com/package/axios
// npm install axios


// https://randomuser.me/api
const { useEffect, useState } = React

const fetchRandomData = () => {
  return axios.get('https://randomuser.me/api')
    .then(({ data }) => {
      console.log(data)
      return JSON.stringify(data, null, 2)
    })
    .catch(err => {
      console.error(err)
    })
}

export default function Question3() {
  const [counter, setCounter] = useState(0)
  const [userInfos, setUserInfos] = useState([])
  const [randomUserDataJSON, setRandomUserDataJSON] = useState('')

  useEffect(() => {
    fetchRandomData().then(randomData => {
      setRandomUserDataJSON(randomData || 'No user data found')
    })
  }, [])

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>
        {counter}
      </p>
      <button onClick={() => {
        setCounter(counter + 1)
        console.log('foo')
      }}>Increase Counter</button>
      <pre>
        {randomUserDataJSON}
      </pre>
    </div >
  )
}
