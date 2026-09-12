import React,{useState} from "react";
function MyComponent(){
    const[name,setName]=useState("Guest");
    const[age,setAge]=useState(0);
    const updatename=()=>{
        setName("Vignesh")
    }
    const Updateage=()=>{
        setAge(age+1);
    }
    return(
        <div>
            <p>Name:{name}</p>
            <button onClick={updatename}>set name</button>
            <p>Age:{age}</p>
            <button onClick={Updateage}>Increment</button>
        </div>
    );
}
export default MyComponent