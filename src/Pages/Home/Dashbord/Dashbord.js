import React from 'react'
import useTitle from '../../../hooks/useTitle'
import Admin from '../../../Layout/Admin/Admin'

export default function Dashbord() {
  useTitle("dashboard")
  return (
    <div className='visible md:invisible'>Dashbo
    <Admin></Admin>
    
    </div>
  )
}
