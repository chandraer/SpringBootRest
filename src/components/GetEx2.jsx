import { useRef,useState } from "react";
import axios from "axios";
const GetEx2=()=>{
const ref1=useRef(null);
const [arr,setArr]=useState([]);
const fetch_data=()=>{
    get_data();
}
const get_data=async ()=>{
    const response=await axios.get(`https://reqres.in/api/users?page=${ref1.current.value}`);
   console.log(response);
   const {data:x}=response;
   const {data}=x;
setArr(data);
}
return(
    <>
   Number:<input type="number" placeholder="Enter valid pagenumber" ref={ref1}></input><br></br><br></br>
    <button onClick={fetch_data}>GetData</button>
    <br></br>
    {
        arr.length!=0?(
            
            <table className="table table-bordered table-striped table-success" >
                <thead>
            <tr>
                <th>id</th>
                <th>email</th>
                <th>first_name</th>
                <th>last_name</th>
                <th>avatar</th>
            </tr>
            </thead>
            <tbody>
         {
            arr.map((element,index)=>{
                return(
                <tr key={index}>
                    <td>{element.id}</td>
                    <td>{element.email}</td>
                    <td>{element.first_name}</td>
                    <td>{element.last_name}</td>
                    <td><img src={element.avatar}></img></td>
                </tr>)
            })
         }
         </tbody>
         <tfoot></tfoot>
            </table>):(<i className="fa fa-spin fa-spinner"></i>)

}
        
        
    </>
)
}

export default GetEx2;