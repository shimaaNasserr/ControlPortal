

import axios from 'axios'
import './Register.css'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

export default function Register() {
  let [errMsg,setErrorMsg]=useState("")
  let [loading,setLoading]=useState(false)
  let nav =useNavigate()

  let vaild=Yup.object({
    name:Yup.string().min(2,"min char 2").max(30,"max char 30").required(),
    email:Yup.string().email("ادخل بريد الكتروني صحيح"),
    // phone: Yup.string().required().matches(/^(010|011|012|015)[0-9]{8}$/, "enter Valid Phone"),
    password:Yup.string().required(),
    year_id:Yup.string().matches(/^[1|2|3|4|5]$/),
  }
)

  
  let formik=useFormik({
   initialValues:{
       name:"",
       email:"",
       
       password:"",
       year_id:""

   }
   ,
   onSubmit:(x)=>
    {
      sendDataRegister(x)
   }
   ,
   validationSchema:vaild
   
  })

  async function sendDataRegister(objectdata){
     setLoading(true)
     let data= await axios.post(`https://controlportal.ehabdiab.com/public/api/students/store`,objectdata).catch((error)=>{
      //setErrorMsg(error.data.data.msg)
      setLoading(false)

     })
     setErrorMsg("هذا الطالب مسجل مسبقا")
     console.log(errMsg);
     console.log(objectdata)
     console.log(data)
     
     setLoading(false)

     if (data.data.msg === 'تم اضافه الطالب بنجاح' ) {
      nav('/adminpage')
  }
   
 
    }
  
return (
  <>
  <div className='reg pt-1 pb-5 mb-5'>
  <form className='center' onSubmit={formik.handleSubmit}>
   <div id="innerBox" className="inner inners mt-5 px-5 pb-3   mx-auto">
 <h1 className=" text-center pt-2 "> ادخل طالب جديد</h1>
 <div className="row">
 <div className="col-md-12">
      <label htmlfor='name' className='text-white'>الاسم:</label>
      <input  onChange={formik.handleChange} type="text" name='name' id="name" className='form-control input' />
      <p className='text-danger'>{formik.errors.name}</p>
    </div>
   <div className="col-md-12 ">
   <label htmlFor='email' className='text-white' >البريد الإلكتروني:</label>
     <input onChange={formik.handleChange} type="email" className="input form-control loginName " id="email" name='email'  placeholder="ادخل البريد الإلكتروني" />
     <p className='text-danger'>{formik.errors.email}</p>
   </div>
   <div className="col-md-12 ">

<label htmlfor='year_id' className='text-white' >السنة الدراسية:</label>
<input  onChange={formik.handleChange} type="year_id" name='year_id' id="year_id" className='form-control input' />
<p className='text-danger'>{formik.errors.year_id}</p> 

</div>
   <div className="col-md-12 ">
   <label htmlFor='password' className='text-white'>كلمة السر:</label>
     <input onChange={formik.handleChange} type="password" name='password' className="input mt-1 form-control loginPass" id="password"  placeholder="ادخل كلمة السر" />
     <p className='text-danger'>{formik.errors.password}</p> 
     </div>

{/* {errMsg!=""?<div className='alert alert-danger '>
  {errMsg} */}
{/* </div>:""} */}
<p className='text-danger'>{errMsg}</p>
{loading==false?
<button  disabled={!formik.isValid} className='btn btn-info fs-4  text-white pt-2' type='submit'>إنشاء حساب جديد</button>
: 
<button   className='btn btn-info p-2 w-100' type='submit'>
  <i className='fa-solid fa-spinner fa-spin text-white px-4 fs-5'></i>
</button>
}


    
</div>
</div>
</form>
</div>

  </>
 
)}
