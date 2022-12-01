import React from 'react'
import {useEffect, useState } from 'react'
import useTitle from '../../../../hooks/useTitle';
import Modal from '../../../Modal/Modal';
import Suboneplus from './Suboneplus';

export default function Oneplus() {
  useTitle("onePlus")
    const [alldata, setalldata] = useState([]);
    const [singleitem, setsingleitem] = useState(null);

    useEffect(() => {
    
  fetch("http://localhost:5000/product")
    .then((res) => res.json())
    .then( data=>{setalldata(data)});
    
}, []);

const result =alldata.filter(word => word.categore ==='oneplus');
console.log("resutl",result)

  return (


    <div className='grid grid-cols-1 md:grid-cols-2'>
     {
     result.map((item,i)=><Suboneplus data={item} key={i} setsingleitem={setsingleitem}></Suboneplus>)
     
     }
     {singleitem &&
       <Modal singleitem={singleitem}></Modal>
     }
    </div>
  )
}
