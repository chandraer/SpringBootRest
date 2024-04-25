import {useState,useEffect} from "react"
import axios from "axios";
const GetEx3=()=>{
    const [arr,setArr]=useState([]);
    const fetch_data=async ()=>{
    const response=await axios.get("http://localhost:2322/getall");
     console.log(response);
     const {data}=response;
     console.log(data);
     setArr(data);
    }
    useEffect(()=>{
        fetch_data(),[]
    })
   return(
    <>
     {
      
         arr.length!=0?(<table className="table table-bordered table-striped table-success">
             <thead>
                <tr>
                 <th>eid</th>   
                  <th>name</th>  
                 <th>salary</th>  
                 <th>ta</th>  
                 <th>da</th>  
                <th>pf</th>  
                 <th>gross_Salary</th>  
                <th>net_Salary</th>
                 </tr>
            </thead>
            <tbody>
               {
                   arr.map((element,index)=>{
                        return(
                       <tr key={index}>
//                         <th>{element.eid}</th>
//                         <th>{element.name}</th>
//                         <th>{element.salary}</th>
//                         <th>{element.ta}</th>
//                         <th>{element.da}</th>
//                         <th>{element.pf}</th>
//                         <th>{element.gross_Salary}</th>
//                         <th>{element.net_Salary}</th>
//                     </tr>
                  )
                     })
                   }
//             </tbody>
//         </table>)
          :(<i className="fa fa-spin fa-spinner"></i>)
          
    }
    </>
   )

}
export default GetEx3;