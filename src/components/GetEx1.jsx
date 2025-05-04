import axios from "axios";
import {useEffect,useState} from "react";
const GetEx1=()=>{
    const [arr,setArr]=useState([]);
    const get_function=async()=>{
        const response=await axios.get("https://www.w3schools.com/angular/customers.php");
        console.log(response);
        const {data}=response;
        console.log(data);
        const {records}=data;
        console.log(records);
        setArr(records);
    }
    useEffect(()=>{
        get_function();
    },[]);
    return(
        <>
        {
       arr.length!=0?(<table className="table table-bordered table-striped table-success table-hover">
        <thead>
            <tr>
                <th>Name</th>
                <th>City</th>
                <th>Country</th>
            </tr>
            </thead>
            <tbody>
            {
              arr.map((element,index)=>{
                return(
                    <tr key={index}>
                    <td>{element.Name}</td>
                    <td>{element.City}</td>
                    <td>{element.Country}</td>
                </tr>
                )
              })  
             }
             </tbody>
             <tfoot></tfoot>
        </table>):(<i className="fa fa-spin fa-spinner"></i>)}
        </>
    )
}
export default GetEx1;