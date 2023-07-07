import axios from 'axios'
import './NewAdmin.css'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

export default function NewAdmin() {
  let [errMsg, setErrorMsg] = useState("")
  let [loading, setLoading] = useState(false)
  let nav = useNavigate()

  let vaild = Yup.object({
    name: Yup.string().min(2, "min char 2").max(30, "max char 30").required(),
    email: Yup.string().email("ادخل بريد الكتروني صحيح"),
    password: Yup.string().required(),
    password_confirmation: Yup.string().oneOf([Yup.ref("password")])
  }
  )
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    }
    ,
    onSubmit: (x) => {
      sendDataRegister(x)
    }
    ,
    validationSchema: vaild

  })

  async function sendDataRegister(objectdata) {
    setLoading(true)
    let data = await axios.post(`https://controlportal.ehabdiab.com/api/register_admin`, objectdata).catch((error) => {
      //setErrorMsg(error.data.data.msg)
      setLoading(false)

    })
    console.log(objectdata)
    console.log(data)

    setLoading(false)
   
    if (data.data.msg === 'تم انشاء الحساب بنجاح') {
      nav('/adminpage')
    }
  }
  return (
    <>
      <div className='reg pt-1 pb-5 mb-5'>
        <form className='center' onSubmit={formik.handleSubmit}>
          <div id="innerBox" className="inner inners mt-5 px-5 pb-3   mx-auto">
            <h1 className=" text-center pt-2 "> ادخال مدير جديد</h1>
            <div className="row">
              <div className="col-md-12">
                <label htmlfor='name' className='text-white'>الاسم:</label>
                <input onChange={formik.handleChange} type="text" name='name' id="name" className='form-control input' />
                <p className='text-danger'>{formik.errors.name}</p>
              </div>
              <div className="col-md-12 ">
                <label htmlFor='email' className='text-white' >البريد الإلكتروني:</label>
                <input onChange={formik.handleChange} type="email" className="input form-control loginName " id="email" name='email' placeholder="ادخل البريد الإلكتروني" />
                <p className='text-danger'>{formik.errors.email}</p>
              </div>
              <div className="col-md-12 ">
                <label htmlFor='password' className='text-white'>كلمة السر:</label>
                <input onChange={formik.handleChange} type="password" name='password' className="input mt-1 form-control loginPass" id="password" placeholder="ادخل كلمة السر" />
                <p className='text-danger'>{formik.errors.password}</p>
              </div>
              <div className="col-md-12 ">
                <label htmlFor='password' className='text-white'>إعادة كلمة السر:</label>
                <input onChange={formik.handleChange} type="password" name='password_confirmation' className="input mt-1 form-control loginPass" id="password_confirmation" placeholder="إعادة كلمة السر" />
                <p className='text-danger'>{formik.errors.password_confirmation}</p>
              </div>

              {errMsg != "" ? <div className='alert alert-danger '>
                {errMsg}
              </div> : ""}
              {loading == false ?
                <button disabled={!formik.isValid} className='btn btn-info fs-4  text-white pt-2' type='submit'>إنشاء حساب جديد</button>
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


