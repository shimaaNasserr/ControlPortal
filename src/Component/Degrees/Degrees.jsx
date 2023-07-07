import React from 'react'
import './Degrees.css'

export default function Degrees({userDeg}) {

  let x=userDeg.data[0]?.total
  let y=userDeg.data[1]?.total
  let r=userDeg.data[2]?.total
  let f=userDeg.data[3]?.total
   let z=x+y+r+f
   let grade=""
   if(z>=510){
     grade="A"
   }else if(z>=450){
      grade="B"
   }else if(z>=360){
      grade="C"
   }else if(z>300){
      grade="D"
   }else{
    grade="F"
   }
   console.log(z)
  return (
    <div className=" mt-5">
   <div className="container">
  <div className="row py-5  justify-content-center">

  { userDeg.data.map((product,i) => {
       return  <div className="col-lg-3 col-md-4 col-sm-6 py-4">
       <div className="item py-2">
         <h2 className='row justify-content-center text-light'>{product?.subName}</h2>
         <hr></hr>
         <p className='row justify-content-center text-light fs-5'>
         اعمال السنة:  {product?.mid}</p>
         <p className='text-light row justify-content-center fs-5'>
          الامتحان النهائي: {product?.final}</p>
         <p className='text-light row justify-content-center fs-5'>
          المجموع الكلي : {product?.total}</p>
         {product?.total>75?<p className='text-success row fs-2 justify-content-center'>
         ناجح</p>: <p className='text-danger fs-2 row justify-content-center'>
         راسب</p>}
         
     </div>
     
       </div>
       

      })}
     

{userDeg.data.length==4?<div className="col-lg-3 col-md-4 col-sm-6 py-4">
      <div className="item py-2">
        <h2 className='row justify-content-center text-light'>مجموع المواد</h2>
        <hr></hr>
        <p className='text-light row justify-content-center fs-5'>
  المجموع الكلي: {z}</p>
        
        <p className='text-light row justify-content-center fs-5'>
    التقدير العام: {grade}</p>

    {z>300?
        <p className='text-success row justify-content-center fs-2'>
    ناجح</p>:  <p className='text-danger row justify-content-center fs-2'>
    راسب</p>}
    </div>
    
      </div>
:<h1 className='row justify-content-center mt-5 text-danger  '>ترقب ظهور باقي نتائج المواد</h1>}
      
    </div>
  </div>
</div>

  )
}

