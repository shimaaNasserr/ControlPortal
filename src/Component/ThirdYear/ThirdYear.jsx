import React, { useEffect, useState } from "react";
import axios from "axios";
// import './FristYear.css';
import { Navigate, useNavigate } from 'react-router-dom'
export default function FristYear({updateDatast,updateDegst}) {

  let navigate = useNavigate();
  let [prepStud, setPrepStud] = useState([]);
   let [getdegree,setdegree]=useState([])
let [studentId,setstudentId]=useState([])



  useEffect(() => {
    getPrepStud()
    // handleClick(e){
    //   setstudentId(e.target.getAttribute("bee"))
    
    // }
    degree(studentId)
    degree(studentId)
  }, []);

  async function getPrepStud() {
    let data =
      await axios.get(`https://controlportal.ehabdiab.com/public/api/students/get_students_in_one_year/4
    `);

   
     
    setPrepStud(data.data);
    console.log(data.data)
  
  }
  async function degree(id){
    console.log(id);
    let deg= await axios.get(`https://controlportal.ehabdiab.com/public/api/student_marks/show/21`)
    setdegree(deg.data)
  }
 
 console.log(getdegree) 
 function searchById(inp){
  console.log(inp);
  axios.get(`https://controlportal.ehabdiab.com/public/api/students/search/${inp}`).then((data)=>{
      if(data.status==200
        ){
        let a=[data.data.data];
        console.log(data.data);
        setPrepStud(a);

      }
  }).catch((error)=>{
      if(error.request.status===404){
     getPrepStud()
      }
  })  ;



}
    async function searchByName(inp){
      console.log(inp);
      let stu= await axios.get(`https://controlportal.ehabdiab.com/public/api/students/search_by_name/${inp}`)  ;
      console.log(stu.data);
      let a=stu.data;
      if(a.length===0){
        getPrepStud()
      }else{
        setPrepStud(a)
      }

  }

    function deleteStudent(stuId){
      console.log(stuId)
      return  axios.delete(`https://controlportal.ehabdiab.com/public/api/students/delete/${stuId}?_method=delete`),
      getPrepStud()
     
    // 
  }

  const addStrud=  function (){

    navigate('/Register')
    
     }
function updateData(x){
   updateDatast(x)
  // console.log(x)
  navigate('/editstudentdata')
}

  // const updateData=  function (){
        
  //   navigate('/editstudentdata')
    
  //    }
  
  function updateGrade(x){
    updateDegst(x)
   // console.log(x)
   navigate('/Editsub')
  }
  return <>
  <div className="container   searchInputs ">
   <div class="w-75 m-auto my-4 px-4  " >
     <div class="row">
         <div class="col-md-6 py-2">
             <input type="text" onInput={function(e){searchById(e.target.value)}}  class="form-control bg-transparent" placeholder="بحث برقم الجلوس"/>
         </div>
         <div class="col-md-6 py-2">
             <input type="text"  onInput={function(e){searchByName(e.target.value)}}class="form-control bg-transparent" placeholder="بحث بالاسم"/>
         </div>
     </div>
 </div>

 <div className="container data">
 <div className="col-md-12 col-lg-6 mt-3">
               <div className="row  text-center">
                   <div className="col-1 p-0"> م</div>
                   <div className="col-1 p-0">رقم الجلوس</div>
                   <div className="col-3 p-0">الاسم</div>
                   <div className="col-4 p-0 ">البريد الالكتروني</div>
                   <div className="col-3  "> الهاتف</div>
               </div>
             </div>
       {prepStud.map((stud,i) => {
            
         return (
          
           <div className="row pb-3 border border-1">
           <div className="col-md-12 col-lg-6 mt-3">
               <div className="row  text-center">
                   <div className="col-1 p-0">{i+1}</div>
                   <div className="col-1 p-0">{stud.id}</div>
                   <div className="col-3 p-0">{stud.name}</div>
                   <div className="col-4 p-0 ">{stud.email}</div>
                   <div className="col-3  ">{stud.phone}</div>
               </div>
             </div>
             <div className="col-md-12  col-lg-6 mt-3">
               <div className="row ">
                   <div className="col-3 "> <button
                     type="button" 
                     className="btn btn-info text-white"
                     onClick={()=>{  updateData(stud.id)}}
                   >
                     تعديل بيانات الطالب
                   </button></div>
                   <div className="col-3">    
                    <button
                     type="button"
                     className="btn btn-warning text-white"  
                     onClick={()=>{navigate("/insertDegree")}}
                   
                   >
                         ادخال نتيجة الطالب
                   </button>
                   </div>
                   <div className="col-3">
                   <button
                     type="button"
                     className="btn btn-secondary text-white"
                     onClick={()=>{  updateGrade(stud.id)}
                   }
                   
                   >
                       تعديل نتيجة الطالب
                   </button>
                   </div>
                   <div className="col-3">
                   <button
                     type="button"
                     className="btn btn-danger text-white"
                     onClick={()=>{  deleteStudent(stud.id)}
                     
                     }
                   >
                       حذف الطالب
                   </button>
                    </div>
                   
               </div>
             </div>
             </div>
           
     );
   })}

   


       <button
                     type="button"
                     className="btn btn-warning text-white px-5 my-3"
                   onClick={addStrud}
                   >
                     اضافة طالب 
                   </button>
  </div>
  </div>
    </>
 
}