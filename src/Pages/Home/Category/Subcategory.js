import React from 'react'

import { useNavigate } from "react-router-dom";

export default function Subcategory({order}) {
    const {category}=order
    console.log("pani",category)
    let navigate = useNavigate();
    

     const handlecategory =cate=>{
      navigate(`/${cate}`);
     }

  return (
    <div>


       <div className='btn btn-secondary mx-5 mb-1'><button onClick={ ()=>handlecategory(category)}>{category}</button></div>
      
     
       
    
        
    </div>
  )
}
