import React from 'react'
import axios from 'axios'
import { useState , useEffect} from 'react'
import {useNavigate } from 'react-router-dom'
import './Editsub.css'

export default function Editsub({updateDeg,goToEditDeg}) {

  let navigate = useNavigate();

  let [allsubject,setAllSubjsct]=useState([])

   
  useEffect(() => {
    showData()
}, [])

  
   
    console.log(updateDeg)

  async function showData(){
      
       let response= await axios.get(`https://controlportal.ehabdiab.com/public/api/student_marks/show/${updateDeg}`)
       if(response.data.length!==0){
        setAllSubjsct(response.data)
       }
    
         console.log(response)
       
    }


    console.log(allsubject);
    
    function sh(idsub,idst){
     
      goToEditDeg(idsub,idst)
       navigate('/EditDegree')
      }
  
   


return (<>

  <div className='reg1'>
      <div className='row justify-content-center align-items-center'>
        
  
      {allsubject.map((product,i) => {
       return  <button className='btn btn-secondary my-3 py-3 fs-4' 
        onClick={()=>{  sh(product.subId,product.id)}}
      >
      {product.subName}
    </button>
    

      })}
     

 
   </div>

</div>
  
 
  </>
    
  )
}
