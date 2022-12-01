import React from 'react'
import useTitle from '../../hooks/useTitle'

export default function Notfound() {
    useTitle("404_page")
  return (
    <div className='text-blod text-red-600'>
        There is no page

        <div>
            <img src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7888.jpg?w=2000" alt="" />
        </div>
    </div>
  )
}
