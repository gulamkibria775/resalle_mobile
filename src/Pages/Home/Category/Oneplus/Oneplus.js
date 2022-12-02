import React from 'react'
import {useEffect, useState } from 'react'
import useTitle from '../../../../hooks/useTitle';
import Modal from '../../../Modal/Modal';
import Suboneplus from './Suboneplus';
import { useQuery } from '@tanstack/react-query';

export default function Oneplus() {
  useTitle("onePlus")
    const [alldata, setalldata] = useState([]);
    const [singleitem, setsingleitem] = useState(null);




const {data: users = [],refetch} = useQuery({
  queryKey: ['users'],
  queryFn: async() =>{
      const res = await fetch('http://localhost:5000/product');
      const data = await res.json();
      return data;
  }
});


const result =users.filter(word => word.categore ==='oneplus');
console.log("resutl",result)

  return (


    <div className='grid grid-cols-1 md:grid-cols-2'>
     {
     result?.map((item,i)=><Suboneplus data={item} key={i} setsingleitem={setsingleitem}></Suboneplus>)
     
     }
     {singleitem &&
       <Modal singleitem={singleitem}></Modal>
     }
    </div>
  )
}
