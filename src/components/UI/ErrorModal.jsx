import React from 'react'
import Button from './Button'
import Card from './Card'
 

const ErrorModal = ({error,setError}) => {
  return (
  <>
   {
    error ? (
        <div onClick={()=>{setError(false)}} className='fixed top-1/4 left-0 flex justify-center mx-auto w-full z-50 text-center  '>
        <Card >
           <header className='bg-red-500 m-5'>Tüm Alanları Doldurunuz!!!</header>
           <footer >
               <Button className="w-32">Tamam</Button>
           </footer>
       </Card>
       </div>
    ):null
   }
  </>
  )
}

export default ErrorModal