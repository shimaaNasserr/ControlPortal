import React from 'react'
import './AdminPage.css'
import { Navigate, useNavigate } from 'react-router-dom'
export default function AdminPage() {
    let navigate = useNavigate();
    const fristYearStudent=  function (){

        navigate('/fristyear')
        
         }
    const secondYearStudent=  function (){

        navigate('/secondyear')
        
         }
    const thirdYearStudent=  function (){

        navigate('/thirdyear')
        
         }
    const fourthYearStudent=  function (){

        navigate('/fourthyear')
        
         }
         
         function addAdmin(){
            navigate('/newadmin')
         }
    return (
        <>
             <div className="container-fluid ">
                <div className='mt-5 pt-5 owner  '>
                <div className="row pt-5  ">
                    <div className="w-50 m-auto">
                        <div className="item years  py-2">
                            <h2 className='row justify-content-center text-light' onClick={fristYearStudent}>طلاب الفرقة الأولي</h2>
                        </div>
                    </div>
                </div>
                <div className="row pt-3  mt-2">
                    <div className="w-50 m-auto ">
                        <div className="item years  py-2 ">
                            <h2 className='row justify-content-center text-light' onClick={secondYearStudent}>طلاب الفرقة الثانية</h2>
                          
                        </div>
                    </div>
                </div>
                <div className="row pt-3 mt-2">
                    <div className="w-50 m-auto ">
                        <div className="item years  py-2">
                            <h2 className='row justify-content-center text-light' onClick={thirdYearStudent}>طلاب الفرقة الثالثة</h2>
                        </div>
                    </div>
                </div>
                <div className="row pt-3 mt-2">
                    <div className="w-50 m-auto">
                        <div className="item years  py-2">
                            <h2 className='row justify-content-center text-light' onClick={fourthYearStudent}>طلاب الفرقة الرابعة</h2>
                        </div>
                    </div>

                </div>

                <div className=" pt-2 mt-1 d-flex justify-content-center">
                <button
                        type="button"
                        className="btn btn-info text-white px-5 fs-3 "
                 onClick={addAdmin}
                      >
                اضافة مدير جديد
                      </button>

                </div>
                
                </div>
            </div>


       
        </>
    )
}
