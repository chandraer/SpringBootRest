import axios from "axios";
import { useState,useEffect } from "react";
const DeleteEx1=()=>{
    const [num,setNum]=useState(null);
    const delete_data=async ()=>{
        const response=await axios.delete("http://localhost:2322/delete/16");
        console.log(response);
        const{status}=response;
        setNum(status);
    }
    useEffect(()=>{delete_data()},[]);
    return(
        <>
        <h1>{num}</h1>
        </>
    )
}
export default DeleteEx1