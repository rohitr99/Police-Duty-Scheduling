import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'

import PoliceService from '../../service/PoliceService';


export default function Leave_Table() {

  const [plist,setplist]=useState([]);
  const fetchdata=()=>{
    PoliceService.getAllleaves()
     .then((result)=>{
        console.log(result.data);
        setplist([...result.data])
     })
     .catch((err)=>{
        console.log("error occured",err)
     })
  }
  useEffect(()=>{
     fetchdata()

  },[])


 const deleteleave=(lv_id)=>{

    PoliceService.deleteleave(lv_id)
  .then((result)=>{
    console.log(result.data);
    fetchdata()
  })
  .catch(()=>{})

 }

 
 const acceptrequest=()=>{

 }

  return (
    <div>
    <br></br>
        <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">LvId</th>
      <th scope="col">From_Date</th>
      <th scope="col">To_Date</th>
      <th scope="col">Reason</th>
      <th scope="col">Pid</th>
      <th>action</th>
    </tr>
  </thead>
  <tbody>
    {plist.map((ob)=><tr>
     
      <td >{ob.lvId}</td>
      <td>{ob.fromDate}</td>
      <td>{ob.toDate}</td>
      <td>{ob.reason}</td>
      <td>{ob.pid}</td>
      <td> 

         <button type="button" name="btn" id="edit_activity" className="btn btn-primary" onClick={acceptrequest} >Accept</button>&nbsp;&nbsp;&nbsp;

         <button type="button" name="btn" id="deleteleave"  className="btn btn-danger" onClick={()=>{deleteleave(ob.lvId)}}>Decline</button>
       
      
      </td>
    </tr>)}
    
  </tbody>
</table>
    </div>
  )
}
