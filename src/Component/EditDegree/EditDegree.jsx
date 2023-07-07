import React from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import { useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './EditDegree.css'
import * as Yup from 'yup'


export default function EditDegree({editidstud,editidsub}) {
 let nav=useNavigate ()
  let [errMsg,setErrorMsg]=useState("")
  let [loading,setLoading]=useState(false)
    let vaild=Yup.object({
        mid:Yup.string().min(1).max(3).required(),
        final:Yup.string().min(1).max(3).required(),
  
  
      })
    let formik=useFormik({
        initialValues:{
            mid:"",
            final:"",
       
        }
        ,
        onSubmit:(x)=>
         {
           UpdataStudentDegree(x)
        }
        ,
        validationSchema:vaild
        
       })
       console.log(editidstud)
       console.log(editidsub) 
    async function UpdataStudentDegree(objectdata){
     
        let data = await axios.put(`https://controlportal.ehabdiab.com/public/api/update_student_marks/${editidstud}/${editidsub}`,objectdata)
   
    
        console.log(data.data)
        setErrorMsg()
      
        setLoading()
         if (data.data.msg == 'تم تعديل درجات الطالب بنجاح') {
           nav('/adminpage')
       }
     
    }return(
        <>
        <div className='stuDegree reg mt-5'>
        <form className='stuDegree' onSubmit={formik.handleSubmit}>
         <div id="innerBox" className="inner inners mt-5 px-5 pb-4  mx-auto">
       <h1 className=" text-center pt-3 "> تعديل درجات الطالب</h1>
       <div className="row">
      
       
    
      
      <div className="col-md-12 ">
         <label htmlFor='password' className='text-white'>درجة امتحان منتصف الفصل الدراسي:</label>
           <input onChange={formik.handleChange} type="number" name='mid' className="input mt-1 form-control loginPass" id="mid"  />
           <p className='text-danger'>{formik.errors.password}</p> 
           </div>
         <div className="col-md-12 ">
         <label htmlFor='password' className='text-white'>درجة امتحان نهاية الفصل الدراسي:</label>
           <input  onChange={formik.handleChange} type="number" name='final' className="input mt-1 form-control loginPass" id="final"  />
           <p className='text-danger'>{formik.errors.password}</p> 
           </div>
         
    
      
      {errMsg!=""?<div className='alert alert-danger '>
        {errMsg}
      </div>:""}
    
     
    
    
    
      {loading==false?
      <button  disabled={!formik.isValid} className='btn btn-info fs-4 text-white p-2' type='submit'>تعديل</button>
      : 
      <button   className='btn btn-info p-2 w-100' type='submit'>
        <i className='fa-solid fa-spinner fa-spin text-white px-4 fs-5'></i>
      </button>
      } 


      </div>
      </div>
   
        </form>
      </div>
        </> )}
      
