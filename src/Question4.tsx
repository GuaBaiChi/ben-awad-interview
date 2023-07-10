// https://www.youtube.com/watch?v=gnkrDse9QKc
// Question 4, Add a button to load more results

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

const fetchRandomData = (pageNumber: number) => {
  return axios
    .get(`https://randomuser.me/api?page=${pageNumber}`)
    .then(({ data }) => data)
    .catch(err => {
      console.error(err)
    })
}

const getFullUserName = (userInfo: UserInfo) => {
  const { name: { first, last } } = userInfo
  return `${first} ${last}`
}

export default function Question4() {
  const [counter, setCounter] = useState(0)
  const [nextPageNumber, setNextPageNumber] = useState(1)
  const [userInfos, setUserInfos] = useState<Array<UserInfo>>([])
  const [randomUserDataJSON, setRandomUserDataJSON] = useState('')

  const fetchNextUser = () => {
    fetchRandomData(nextPageNumber).then((randomData) => {
      // setRandomUserDataJSON(JSON.stringify(randomData, null, 2) || 'No user data found')
      if (randomData === undefined) return
      const newUserInfos = [
        ...userInfos,
        ...randomData.results
      ]
      setUserInfos(newUserInfos)
      setNextPageNumber(randomData.info.page + 1)
    })
  }

  useEffect(() => {
    // fetchNextUser()
    fetchNextUser()
  }, [])

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>
        {counter}
      </p>
      <button
        onClick={() => {
          setCounter(counter + 1)
          console.log('foo')
        }}
      >
        Increase Counter
      </button>
      <button
        onClick={() => {
          fetchNextUser()
        }}
      >
        Fetch Next User
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
