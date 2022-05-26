import React from "react";
import Style from './style.module.css'

// const Counter=()=>{

//     let [count,setCount]=React.useState(3)
//     let IncrementValue=()=>{
//         setCount(count+1)
//     }
//     let DecrementValue=()=>{
//         setCount(count-1)
//     }

//    return(<div>
//     <h1>Counter : {count}</h1>
//     <button onClick={IncrementValue}>Increment</button>
//     <button onClick={DecrementValue}>Decrement</button>
// </div>) 
// }


const Counter=()=>{

    let [count,setCount]=React.useState(3)

   return(<div>
    <h1 className={count%2==1 ? Style.red : Style.green}>Counter : {count}</h1>
    <button onClick={()=> setCount(count+1)}>Increment</button>
    <button onClick={()=> {if(count>0){ return setCount(count-1)}} }>Decrement</button>
    <button onClick={()=>setCount(count*2)}>Double</button>


</div>) 
}

export default Counter