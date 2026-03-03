/*import React from 'react'
//destructuring
//  const User=(name,age)=>{}
const User = (props) => {
  return (
    //<div>User name={name} age={age}</div>
    <div>User name={props.name} age={props.age} skills={props.skills}</div>
    <ul>
        {props.skills.map((skill,index)=>(
            <li key={index}>{skill}</li>
        ))}
    </ul>
  )
}

export default User
*/


import React from 'react'

const User = ({name,age,skills}) => {
  return (
    <>
    <div>User name={name}</div>
    <h3>User age={age}</h3>
    <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </>
  )
}

export default User 