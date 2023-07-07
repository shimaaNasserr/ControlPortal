
import "./Profile.css"
import a from '../../assets/stutent.jpg'



export default function Profile({userData,userSub}) {
console.log(userSub.data)
let year=""
if(userData.data[0]?.year_id==0){
  year="الفرقة الاعدادية"
}else if(userData.data[0]?.year_id==1){
  year="الفرقة الاولي قسم نظم وحاسبات"
}else if(userData.data[0]?.year_id==2){
  year="الفرقةالثانية قسم نظم وحاسبات"
}else if(userData.data[0]?.year_id==3){
  year="الفرقة الثالثة قسم نظم وحاسبات"
}else if(userData.data[0]?.year_id==4){
  year="الفرقة الرابعة قسم نظم وحاسبات"
}


  return (
  <>
  <div className="container prof">
<div className="container">
  <div className="mt-3">
  <img src={a} className=" rounded-circle" style={{width: '10%'}} />
  </div>
   <div className='row mt-3'> 
   <div className='col-6'>
   <p className=' prof-p'>الاسم   : {userData.data[0]?.name} </p> 
   <p className='prof-p'>رقم الجلوس   :{userData.data[0]?.id}</p> 
   <p className='prof-p'>الايميل   :{userData.data[0]?.email}</p>
   <p className='prof-p'>رقم التليفون   :{userData.data[0]?.phone}</p>
   <p className='prof-p'>الفرقة      :     {year}</p>
  
  </div>
  <div className='col-6'>
   <p className=' prof-p' >المواد الدراسية الحالية  :  </p>
   <p className=' prof-p'> {userSub.data.data[0].stubject_id}- {userSub.data.data[0].subject_name}</p>
   <p className=' prof-p'>{userSub.data.data[1].stubject_id}- {userSub.data.data[1].subject_name} </p>  
   <p className=' prof-p'>{userSub.data.data[2].stubject_id}- {userSub.data.data[2].subject_name} </p>
     <p className='prof-p'>{userSub.data.data[3].stubject_id}- {userSub.data.data[3].subject_name}</p>
   
  
  
   </div>
   </div>
      </div>
   </div>
    </> 
  )

}

