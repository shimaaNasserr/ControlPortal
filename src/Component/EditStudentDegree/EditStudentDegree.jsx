import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './EditStudentDegree.css'
import * as Yup from 'yup'

export default function EditStudentDegree() {
    let [errMsg,setErrorMsg]=useState("")
    let [loading,setLoading]=useState(false)
    let [studentName , setstudentName] = useState([])
    let [studentyearName , setstudentYearName] = useState([])
    let [studentsubName , setstudentSubName] = useState([])
    let [studentmid , setstudentMid] = useState([])
    let [studentfinal , setstudentFinal] = useState([])
    let [studenttotal , setstudentTotal] = useState([])
    let [productList, setProductList] = useState([])
    useEffect(() => {
        showData()
   }, [])
    let nav =useNavigate()
  
    let vaild=Yup.object({
      mid:Yup.string().min(1).max(3),
      final:Yup.string().min(1).max(3),


    }
  )
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
    async function UpdataStudentDegree(objectdata){
        setLoading(true)
        let data = await axios.put(`https://controlportal.ehabdiab.com/public/api/update_student_marks/21/5`,objectdata).catch((error)=>{
        //  setErrorMsg(error.data.data.msg)
         setLoading(false)
   
        })
        console.log(data.data)
        // console.log(data.data.msg)
        setLoading(false)
        if (data.data.msg == 'تم تعديل درجات الطالب بنجاح') {
          nav('/adminpage')
       }
        //  localStorage.setItem("token",data.data.token)
        //  saveData(data.data.user)
        
     
    }

    async function showData(){
    //    setLoading(true)
       let data= await axios.get(`https://controlportal.ehabdiab.com/public/api/student_marks/show/21`)
        // setErrorMsg(error.data.data.msg)
        // setLoading(false)
  
        setProductList(data.data)
    //    console.log(data.data[0])
       setstudentName(data.data[0].stuName)
       setstudentYearName(data.data[0].yearName)
           setstudentMid(data.data.mid)
        
    //    setLoading(false)
    //    if (data.data.msg == 'تم تسجيل دخول الطالب بنجاح') {
    //     nav('/Adminlogin')
        
    // }}
    }
  return(
    <>
    <div className='reg'>
    <form className='stuDegree' onSubmit={formik.handleSubmit}>
     <div id="innerBox" className="inner inners mt-5 px-5 pb-4  mx-auto">
   <h1 className=" text-center pt-3 "> تعديل درجات الطالب</h1>
   <div className="row">
   <div className="col-md-12">
        <label htmlfor='name' className='text-white'>الاسم:</label>
        <input onKeyUp={formik.handleChange} type="text" name='name' id="name" className='form-control input' value={studentName}   />
        <p className='text-danger'>{formik.errors.name}</p>
      </div>
     <div className="col-md-12 ">
     <label htmlFor='email' className='text-white' >الفرقة الدراسية:</label>
       <input onKeyUp={formik.handleChange} type="text" className="input form-control loginName " id="yearId" name='yearId'   value={studentyearName}  />
       <p className='text-danger'>{formik.errors.email}</p>
     </div>
     {productList.map((product,i) => {
    return<div key={product.id} className=''> 
    <div className="col-md-12" >
  <label htmlfor='yearId' className='text-white' >المادة الدراسية:</label>

  <input  onKeyUp={formik.handleChange} type="text" name='yearId' id="yearId" className='form-control input' value={product.subName} onChange={(e)=>{setstudentSubName(e.target.value)}}/>
  <p className='text-danger'>{formik.errors.year_id}</p> 
  
  </div>
  <div className="col-md-12 ">
     <label htmlFor='password' className='text-white'>درجة امتحان منتصف الفصل الدراسي:</label>
       <input  onKeyUp={formik.handleChange} type="number" name='mid' className="input mt-1 form-control loginPass" id="mid"   value={product.mid} onChange={(e)=>{setstudentMid(e.target.value)}} />
       <p className='text-danger'>{formik.errors.password}</p> 
       </div>
     <div className="col-md-12 ">
     <label htmlFor='password' className='text-white'>درجة امتحان نهاية الفصل الدراسي:</label>
       <input  onKeyUp={formik.handleChange} type="number" name='final' className="input mt-1 form-control loginPass" id="final"  value={product.final} onChange={(e)=>{setstudentFinal(e.target.value)}} />
       <p className='text-danger'>{formik.errors.password}</p> 
       </div>
     {/* <div className="col-md-12 ">
     <label htmlFor='password' className='text-white'>  مجموع الدرجات:</label>
       <input  onKeyUp={formik.handleChange} type="number" name='total' className="input mt-1 form-control loginPass" id="total"   value={product.total} onChange={(e)=>{setstudentTotal(e.target.value)}} />
       <p className='text-danger'>{formik.errors.password}</p> 
       </div> */}

  
  {errMsg!=""?<div className='alert alert-danger '>
    {errMsg}
  </div>:""}

  </div>


})}
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
  
  
  
  
  
  
//   (
//     <>
//     <div className='reg'>
//     <form className='stuDegree' onSubmit={formik.handleSubmit}>
//      <div id="innerBox" className="inner inners mt-5 px-5 pb-4  mx-auto">
//    <h1 className=" text-center pt-3 "> تعديل درجات الطالب</h1>
//    <div className="row">
//    <div className="col-md-12">
//         <label htmlfor='name' className='text-white'>الاسم:</label>
//         <input onKeyUp={formik.handleChange} type="text" name='name' id="name" className='form-control input' value={studentName}   />
//         <p className='text-danger'>{formik.errors.name}</p>
//       </div>
//      <div className="col-md-12 ">
//      <label htmlFor='email' className='text-white' >الفرقة الدراسية:</label>
//        <input onKeyUp={formik.handleChange} type="text" className="input form-control loginName " id="yearId" name='yearId'   value={studentyearName}  />
//        <p className='text-danger'>{formik.errors.email}</p>
//      </div>
//      {productList.map((product,i) => {
//     return<div key={product.id} className=''> 
//     <div className="col-md-12" >
//   <label htmlfor='yearId' className='text-white' >المادة الدراسية:</label>
//   <input  onKeyUp={formik.handleChange} type="text" name='yearId' id="yearId" className='form-control input' value={product.subName} onChange={(e)=>{setstudentSubName(e.target.value)}}/>
//   <p className='text-danger'>{formik.errors.year_id}</p> 
//   </div>
//   <div className="col-md-12 ">
//      <label htmlFor='password' className='text-white'>درجة امتحان منتصف الفصل الدراسي:</label>
//        <input  onKeyUp={formik.handleChange} type="number" name='mid' className="input mt-1 form-control loginPass" id="mid"   value={product.mid} onChange={(e)=>{setstudentMid(e.target.value)}} />
//        <p className='text-danger'>{formik.errors.password}</p> 
//        </div>
//      <div className="col-md-12 ">
//      <label htmlFor='password' className='text-white'>درجة امتحان نهاية الفصل الدراسي:</label>
//        <input  onKeyUp={formik.handleChange} type="number" name='final' className="input mt-1 form-control loginPass" id="final"  value={product.final} onChange={(e)=>{setstudentFinal(e.target.value)}} />
//        <p className='text-danger'>{formik.errors.password}</p> 
//        </div>
//      {/* <div className="col-md-12 ">
//      <label htmlFor='password' className='text-white'>  مجموع الدرجات:</label>
//        <input  onKeyUp={formik.handleChange} type="number" name='total' className="input mt-1 form-control loginPass" id="total"   value={product.total} onChange={(e)=>{setstudentTotal(e.target.value)}} />
//        <p className='text-danger'>{formik.errors.password}</p> 
//        </div> */}

  
//   {errMsg!=""?<div className='alert alert-danger '>
//     {errMsg}
//   </div>:""}

//   </div>


// })}
//   {loading==false?
//   <button  disabled={!formik.isValid} className='btn btn-info fs-4 text-white p-2' type='submit'>تعديل</button>
//   : 
//   <button   className='btn btn-info p-2 w-100' type='submit'>
//     <i className='fa-solid fa-spinner fa-spin text-white px-4 fs-5'></i>
//   </button>
//   }
//   </div>
//   </div>
//     </form>
//   </div>
//     </> )}