import React from "react";
import toast from "react-hot-toast";

export default function Userrow({
  order,
  handleDelete,
  StatusUpdate,
  handleStatusUpdate,
  // status,
  // stata,
}) {
  const { _id,name,email} = order;
  console.log('or' ,order)


  const handleadmin =id=>{
    fetch(`http://localhost:5000/newbuyer/admin/${id}`,{
      method:'PUT'
    })
    .then(res =>res.json())
    .then(data=>{
      console.log("dattta",data)
      
      toast.success("make admin suceesfully")
      
    })
  }
  
  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
            X
          </button>
        </label>
      </th>

      <td>
       
          {email}
       
      </td>
      <td>
       
        {name}
       
      </td>
      <td>
      { order?.role !== 'admin' &&
          <button onClick={()=>handleStatusUpdate(_id)} className="btn btn-Primary">Admin</button>
        }
      </td>
     
    </tr>
  );
}
