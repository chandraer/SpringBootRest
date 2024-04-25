import axios from "axios"; 
import {useState,useRef} from "react";
const PostEx1=()=>{
    const [res,setRes]=useState({});
        
        const name=useRef(null);
        const salary=useRef(null);
        // const ta=useRef(null);
        // const da=useRef(null);
        // const pf=useRef(null);
        // const gross_Salary=useRef(null);
        // const net_Salary=useRef(null);
        const post_data=async ()=>{
            const response=await axios.post("http://localhost:2322/save",{"name":name.current.value,"salary":salary.current.value});
            console.log(response);
        }
        return(
            <>
            
            Emp_Name: <input type="text" placeholder="Enter Your Name" ref={name}></input><br></br>
            Salary: <input type="number" placeholder="Enter Your salary" ref={salary}></input><br></br>
            <button onClick={post_data}>Post</button>
            </>
        )

    };
    export default PostEx1;
