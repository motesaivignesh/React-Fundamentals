import React,{useState} from 'react';
function Counter(){
    const[count,setCount]=useState(0);

    const Increment=()=>{
        setCount(count+1);
    }
    const Decrement=()=>{
        setCount(count-1);
    }
    const reset=()=>{
        setCount(0);
    }
    return(
        <div className="container">
        <p className="count-display">{count}</p>
        <button className="counter-btn" onClick={Increment}>Increment</button>
        <button className="counter-btn" onClick={Decrement}>Decrement</button>
        <button className="counter-btn" onClick={reset}>Reset</button>
        </div>
    );
}
export default Counter