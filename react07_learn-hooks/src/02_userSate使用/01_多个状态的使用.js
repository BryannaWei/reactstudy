import React, {useState} from 'react'

export default function MoreState() {
  const [name, setName] = useState('Bryanna')
  const [age, setAge] = useState(18)
  const [friends, setFriends] = useState(['mei','li'])
  return (
    <div>
      <p>name:{name}</p>
      <p>age:{age}</p>
      <ul>
        {
          friends.map((item,index) => <li key={index}>{item}</li>)
        }
      </ul>
    </div>
  )
}
