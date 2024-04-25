import axios from "axios";
import { useState,useRef } from "react";
const PutEx1=()=>{
    const [obj,setObj]=useState({});
    
    const name=useRef(null);
    const sal=useRef();
    const put_data= async()=>{
            const response=await axios.put("http://localhost:2322/update/34",{"name":name.current.value,"salary":sal.current.value}) ;
            console.log(response);
    }
    return(
        <>
       
      Employee_Name: <input type="text"   placeholder="Enter the name you want to change" ref={name}></input><br></br><br></br>
       Salary: <input type="number"   placeholder="Desired salary" ref={sal}></input><br></br><br></br>
        <button onClick={put_data} className="btn btn-success">ChangeData</button>
     
        </>
    )
}
export default PutEx1;