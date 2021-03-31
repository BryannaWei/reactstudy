import React, {useState} from 'react'

export default function ComplexState() {
  const [friends, setFriends] = useState(['mei','li'])
  const [students, setStudents] = useState([
    { id: 110, name: "why", age: 18 },
    { id: 111, name: "kobe", age: 30 },
    { id: 112, name: "lilei", age: 25 },
  ])

  function addAge(index) {
    const newArr = [...students]
    newArr[index].age += 1;
    setStudents(newArr)
  }
  
  return (
    <div>
      <ul>
        {
          friends.map((item,index) => <li key={index}>{item}</li>)
        }
      </ul>
      <ul>
        {
          students.map((item,index) => 
            <li key={item.id}>
              <span>姓名:{item.name}</span>
              <span>年龄:{item.age}</span>
              <button onClick = { e => addAge(index)}>age+1</button>
            </li>
          )
        }
      </ul>
    </div>
  )
}
