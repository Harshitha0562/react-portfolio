import React from 'react'
import {useState} from 'react'

const State = () => {
    //initialisation of state which must be done above return not inside return
    //syntax: const [var,setvar]=setState(initial value)
    const [count,setCount]=useState(0)
    const [like,setLike]=useState(0)

  return (
    <div>
        <h1>useState example</h1>
        {/*<h3>Count:{count}</h3>
        <button onClick={()=>setCount(count+1)}>+</button>*/}
        <h3>Count:{like}</h3>
        <button onClick={()=>setLike(like+1)}>👍</button>
        <button onClick={()=>setLike(like-1)}>👎</button>
    </div>
  )
}

export default State





//state is the data changes over time
//useState-hook that stores data and manages data