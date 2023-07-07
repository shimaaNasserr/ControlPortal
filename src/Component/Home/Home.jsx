
import React from 'react'
import  './Home.css'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Home() {

  let navigate = useNavigate();
   const studlogin=  function (){
    navigate('/studlogin')
   
     }
     const adminlogin=  function (){

      navigate('/Adminlogin')
      
       }
 
    return <>
    <div className='home '>
         <div className='overlay' >
          <div className='header'>
             <div>
           <h1 className='text-white'>مرحباً بكم في موقع كلية الهندسة بنات قسم النظم والحاسبات</h1> 
            
           <div className='header mt-5'> 
           <button  onClick={adminlogin} className='btn btn-info  text-white p-2 px-3 fs-4 btn-1'>تسجيل دخول المدير</button>

           <button  onClick={studlogin}  className='btn  btn-warning text-white   p-2 fs-4  btn-2 px-3 me-3'>تسجيل دخول الطالب</button>
           </div>
           </div>
         </div>
         </div>
         </div>
    </>
}



