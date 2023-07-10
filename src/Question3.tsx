// https://www.youtube.com/watch?v=gnkrDse9QKc
// Question 4, Display the API data in UI components

import * as React from "react"
import './Styles.css';
import axios from "axios"
// https://www.npmjs.com/package/axios
// npm install axios


// https://randomuser.me/api
const { useEffect, useState } = React

interface UserName {
  first: string
  last: string
  title: string
}

interface UserPicture {
  thumbnail: string
}

interface UserInfo {
  name: UserName
  picture: UserPicture
}

const fetchRandomData = () => {
  return axios.get('https://randomuser.me/api')
    .then(({ data }) => {
      console.log(data)
      return data
    })
    .catch(err => {
      console.error(err)
    })
}

const getFullUserName = (userInfo: UserInfo) => {
  const { name: { first, last } } = userInfo
  return `${first} ${last}`
}

export default function Question3() {
  const [counter, setCounter] = useState(0)
  const [userInfos, setUserInfos] = useState<Array<UserInfo>>([])
  const [randomUserDataJSON, setRandomUserDataJSON] = useState('')

  useEffect(() => {
    fetchRandomData().then((randomData) => {
      setRandomUserDataJSON(JSON.stringify(randomData, null, 2) || 'No user data found')
      setUserInfos(randomData.results)
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
      }}
      >
        Increase Counter
      </button>
      {
        userInfos.map((userInfo: UserInfo, idx: number) => (
          <div key={idx}>
            <p>{getFullUserName(userInfo)}</p>
            <img src={userInfo.picture.thumbnail} alt='portrait' />
          </div>
        ))
      }
      <pre>{randomUserDataJSON}</pre>
    </div>
  )
}
