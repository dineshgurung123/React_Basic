import { useEffect, useState } from "react"

function UseEffect() {

const[count, setCount] = useState(0);

const increaseCount = ()=>{

    setCount(count+1)
}

const decreaseCount =()=>{


setCount(count-1)

}
    //first type

    useEffect(() => {
        console.log("This is  useEffect");

    }, [count])

    return (

        <>
          <h1>{count}</h1>
          <button onClick={increaseCount}>+</button>
           <button onClick={decreaseCount}>-</button>
        </>
    )
}

export default UseEffect