import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import * as Yup from 'yup'

export default function InsertDegree() {
  let [errMsg, setErrorMsg] = useState("")
  let [loading, setLoading] = useState(false)

  useEffect(() => {
    insertStudentDegree()
  }, [])
  let nav = useNavigate()

  let vaild = Yup.object({
    mid: Yup.string().min(1).max(3),
    final: Yup.string().min(1).max(3),
    user_id: Yup.string().matches(/^(1|2|3)$/ , "enter valid user id"),
  }
  )
  let formik = useFormik({
    initialValues: {
      mid: "",
      final: "",

    }
    ,
    onSubmit: (x) => {
      insertStudentDegree(x)
    }
    ,
// 59 5 
    validationSchema: vaild
  })
  async function insertStudentDegree(objectdata) {
    setLoading(true)
    let data = await axios.post(`https://controlportal.ehabdiab.com/api/insert_marks`, objectdata).catch((error) => {
      //  setErrorMsg(error.data.data.msg)
      setLoading(false)
    })
    // console.log(data.data.msg)
    // console.log(data.data.msg)
    console.log(data.data.msg);
    setLoading(false)
    if (data.data.msg == "تم تسجيل درجات الطالب بنجاح") {
      nav('/adminpage')
    }
    else{
      setErrorMsg(data.data.msg)
    }
    console.log(data.data);
    //  localStorage.setItem("token",data.data.token)
    //  saveData(data.data.user)
  }
 


  return (
 <>
  <div className='reg'>
        <form className='stuDegree' onSubmit={formik.handleSubmit}>
          <div id="innerBox" className="inner inners mt-5 px-5 pb-4  mx-auto">
            <h1 className=" text-center pt-3 "> ادخال درجات للطالب</h1>
            <div className="row">
  <div className="col-md-12" >
                <label htmlfor='student_id' className='text-white' >رقم الطالب  :</label>
                <input onKeyUp={formik.handleChange} type="number" name='student_id' id="student_id" className='form-control input'  />
                <p className='text-danger'>{formik.errors.year_id}</p>
              </div>
  <div className="col-md-12" >
                <label htmlfor='subject_id' className='text-white' >رقم المادة الدراسية :</label>
                <input onKeyUp={formik.handleChange} type="number" name='subject_id' id="subject_id" className='form-control input'  />
                <p className='text-danger'>{formik.errors.year_id}</p>
              </div>

              <div className="col-md-12 ">
                <label htmlFor='password' className='text-white'>درجة امتحان منتصف الفصل الدراسي:</label>
                <input onKeyUp={formik.handleChange} type="number" name='mid' className="input mt-1 form-control loginPass" id="mid"  />
                <p className='text-danger'>{formik.errors.password}</p>
              </div>
              <div className="col-md-12 ">
                <label htmlFor='password' className='text-white'>درجة امتحان نهاية الفصل الدراسي:</label>
                <input onKeyUp={formik.handleChange} type="number" name='final' className="input mt-1 form-control loginPass" id="final"  />
                <p className='text-danger'>{formik.errors.password}</p>
              </div>
              <div className="col-md-12" >
                <label htmlFor='user_id' className='text-white' >رقم المدير  :</label>
                <input onKeyUp={formik.handleChange} type="number" name='user_id' id="user_id" className='form-control input'  />
                <p className='text-danger'>{formik.errors.year_id}</p>
              </div>

           <p className='text-danger  fs-4 '>{errMsg}
              </p> 

              {loading == false ?
                <button disabled={!formik.isValid} className='btn btn-info fs-4 text-white p-2' type='submit'>تسجيل </button>
                :
                <button className='btn btn-info p-2 w-100' type='submit'>
                  <i className='fa-solid fa-spinner fa-spin text-white px-4 fs-5'></i>
                </button>
              }
              
              </div>
              </div>
              </form>
              </div>
 </>
  )
}