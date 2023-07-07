

import axios from 'axios'
import { useFormik } from 'formik'
import './Login.css'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'


export default function Login({saveData,saveSub ,saveDeg}) {
  let [errMsg,setErrorMsg]=useState("")
  let [loading,setLoading]=useState(false)
  let nav =useNavigate()
 
  let vaild=Yup.object({
  
    email:Yup.string().email("enter vaild email"),
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
     let data= await axios.post(`https://controlportal.ehabdiab.com/public/api/login_student`,objectdata).catch((error)=>{
      setErrorMsg(error.data.data.msg)
      setLoading(false)
     
     })
     let profile= await axios.get(`https://controlportal.ehabdiab.com/api/students/search_by_token/${data.data.access_token}`)

     console.log(profile.data[0].name)
     saveData(profile)
     let sub=await axios.get(`https://controlportal.ehabdiab.com/public/api/student_cources/show/${profile.data[0].id}`)
     saveSub(sub)
     
    
     let deg=await axios.get(`https://controlportal.ehabdiab.com/public/api/student_marks/show/${profile.data[0].id}`)
     saveDeg(deg)             
     console.log(deg)
     setLoading(false)
     if (data.data.msg == 'تم تسجيل دخول الطالب بنجاح') {
  
     
      nav('/profile')
    localStorage.setItem("token",data.data.access_token)
   

     
  }}
  return (
    <>
    
    <form  className="stuLogin"onSubmit={myformik.handleSubmit}>
     <div id="innerBox" className="inner px-5 mx-auto">
   <h1 className=" text-center py-2 pt-4 ">   تسجيل الدخول للطالب</h1>
   <div className="row g-3">
     <div className="col-md-12">
     <label htmlFor='email' className='mb-3'>البريد الإلكتروني:</label>
       <input onChange={myformik.handleChange} type="email" className="input form-control loginName " id="email" name='email'  placeholder="ادخل البريد الإلكتروني" />
       <p className='text-danger'>{myformik.errors.email}</p>
     </div>
     <div className="col-md-12">
     <label htmlFor='email' className='mb-3'>كلمة السر:</label>
       <input onChange={myformik.handleChange} type="password" name='password' className="input form-control loginPass" id="password"  placeholder="ادخل كلمة السر" />
       <p className='text-danger'>{myformik.errors.password}</p> 
       {errMsg != ""? <div className='alert alert-danger'>{errMsg}</div> :""}
        <div className="col-12">
      
     </div>
     {/* <p className="text-white text-center py-2 ">Don't have an account? <a href="signUp.html">Sign Up</a></p> */}
     {loading? <button type='button' className='btn btn-info w-100 my-4'>
   <i className='fa-solid fa-spinner fa-spin fs-4 text-white'></i>
 </button> :<button disabled={!myformik.isValid} className="btn btn-info  form-control mt-3 mb-5 mybttn text-white" type="submit">دخول</button> }
   </div>
 </div>
 </div>
 </form>
    </>
   )

}




