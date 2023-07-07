import axios from 'axios'
import './EditStudentData.css'
import { useFormik } from 'formik'
import React, { useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

export default function EditStudentData({UpdateUserData}) {

    let [errMsg,setErrorMsg]=useState("")
    let [loading,setLoading]=useState(false)
    let [studentName , setstudentName] = useState([])
    let [studentEmail , setstudentEmail] = useState([])
    let [studentYear , setstudentYear] = useState([])
    let [studentPassword , setstudentPassword] = useState([])
    let [productList, setProductList] = useState([])
    useEffect(() => {
        showData()
   }, [])
    let nav =useNavigate()
  
    let vaild=Yup.object({
      name:Yup.string().min(2,"min char 2").max(30,"max char 30").required(),
      email:Yup.string().email("ادخل بريد الكتروني صحيح").required(),
      password:Yup.string(),

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
        UpdataStudentData(x)
        

     }
     ,
     validationSchema:vaild
     
    })
    async function UpdataStudentData(objectdata){
     console.log(UpdateUserData)   
        setLoading(true)
        let data = await axios.put(`https://controlportal.ehabdiab.com/public/api/students/update/${UpdateUserData}`,objectdata).catch((error)=>{
    
         setLoading(false)
   
        })
        // console.log(objectdata) 
        // console.log(data)
  
            if (data.data.msg == 'تم التعديل بنجاح') {
                  nav('/adminpage')
        
               }
    }

    async function showData(){
 
       let data= await axios.get(`https://controlportal.ehabdiab.com/public/api/students/search/${UpdateUserData}`)
        
       setstudentName(data.data.data.name)
       setstudentEmail(data.data.data.email)
       setstudentYear(data.data.data.year_id)
       setstudentPassword(data.data.data.password)
   
    }

    return (
      <>
      <div className='reg'>
      <form className='stuData' onSubmit={formik.handleSubmit}>
       <div id="innerBox" className="inner inners mt-5 px-5 pb-4  mx-auto">
     <h1 className=" text-center pt-3 "> تعديل بيانات الطالب</h1>
     <div className="row">
     <div className="col-md-12">
          <label htmlFor='name' className='text-white'>الاسم:</label>
          <input onKeyUp={formik.handleChange} value={studentName} onChange={(e)=>{setstudentName(e.target.value)}}  type="text" name='name' id="name" className='form-control input'  />
          <p className='text-danger'>{formik.errors.name}</p>
        </div>
       <div className="col-md-12 ">
       <label htmlFor='email' className='text-white' >البريد الإلكتروني:</label>
         <input onKeyUp={formik.handleChange} type="email" className="input form-control loginName " id="email" name='email'  placeholder="ادخل البريد الإلكتروني"  onChange={(e)=>{setstudentEmail(e.target.value)}}  value={studentEmail}/>
         <p className='text-danger'>{formik.errors.email}</p>
       </div>
      
       <div className="col-md-12 ">
       <label htmlFor='password' className='text-white'>كلمة السر:</label>
         <input  onKeyUp={formik.handleChange} type="password" name='password' className="input mt-1 form-control loginPass" id="password"  placeholder="ادخل كلمة السر" value={studentPassword} onChange={(e)=>{setstudentPassword(e.target.value)}} />
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
      </>
    )}


















































