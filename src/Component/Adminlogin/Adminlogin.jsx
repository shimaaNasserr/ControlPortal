

import axios from 'axios'
import { useFormik } from 'formik'
import './Adminlogin.css'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'


export default function Adminlogin({saveData}) {
  let [errMsg,setErrorMsg]=useState("")
  let [errMsg2,setErrorMsg2]=useState("")
  let [loading,setLoading]=useState(false)
  let nav =useNavigate()
  let vaild=Yup.object({
  
    email:Yup.string().email("enter vaild email min 6 character"),
    password:Yup.string().required(),
  
  }
)

  
  let myformik=useFormik({
   initialValues:{
       email:"",
       password:"",
       

   }
   ,
   onSubmit:(x)=>
    {
      sendDataLogin(x)
   }
   ,
   validationSchema:vaild
   
  })

  async function sendDataLogin(objectdata){
     setLoading(true)
     
     let data= await axios.post(`https://controlportal.ehabdiab.com/public/api/login_admin`,objectdata).catch((error)=>{
      // setErrorMsg(error.data.data.msg)
      setLoading(false)

     })
    //  console.log(data.data.msg)
    //  console.log(objectdata);
     setLoading(false)
     if (data.data.msg == 'تم تسجيل الدخول بنجاح') {
      // login
      nav('/adminpage')
      
      
     }
     else{
      setErrorMsg2(data.data.msg)
     }
    //  if(data.data.msg == 'البيانات التي ادخلتها غير موجودة'){
    //     setErrorMsg2(data.data.msg)
    //   }
     console.log(data.data.msg);
  

}
  return (
    <>
  
    <form className="admin"onSubmit={myformik.handleSubmit}>
     <div id="innerBox" className="inner px-5 mx-auto">
   <h1 className=" text-center py-2 pt-4 ">  تسجيل الدخول للمدير</h1>
   <div className="row g-3">
     <div className="col-md-12">
     <label htmlFor='email' className='mb-3'>البريد الإلكتروني:</label>
       <input onChange={myformik.handleChange} type="email" className="input form-control loginName " id="email" name='email'  placeholder="ادخل البريد الإلكتروني" />
       <p className='text-danger'>{myformik.errors.email}</p>
       {errMsg != ""? <div className='alert alert-danger'>{errMsg}</div> :""}

     </div>
     <div className="col-md-12">
     <label htmlFor='email' className='mb-3'>كلمة السر:</label>
       <input onChange={myformik.handleChange} type="password" name='password' className="input form-control loginPass" id="password"  placeholder="ادخل كلمة السر" />
       <p className='text-danger'>{myformik.errors.password}</p> 
       <p className='text-danger  fs-1 '>{errMsg2}</p> 
       {/* {errMsg != ""? <div className='alert alert-danger'>{errMsg}</div> :""} */}

     {/* <p className="text-white text-center py-2 ">Don't have an account? <a href="signUp.html">Sign Up</a></p> */}
     {loading? <button type='button' className='btn btn-info w-100 my-4'>
   <i className='fa-solid fa-spinner fa-spin text-white fs-4'></i>
 </button> :<button disabled={!myformik.isValid} className="btn btn-info form-control mt-3 mb-5 mybttn text-white" type="submit">دخول</button> }
   </div>
 </div>
 </div>
 </form>
    </>
   )

}




