import React from 'react'
import './About.css';

import logo from "../../assets/photo_2023-05-04_13-55-44.jpg"
import OwelCar from '../OwelCar/OwelCar';
export default function About() {

    return <>
    <div className='center cal'>
     <div className='container py-5'>
    
        <div className="row g-5 py-5 justify-content-between">
        <div className="col-md-6 ">

          <h2 className='my fs-2 pb-3'>قسم هندسة النظم والحاسبات:</h2>
                <p className='text-end my pa'>    هو قسم عريق تأسس منذ عام 1978 كثاني أقدم قسم على مستوى جمهورية مصر العربية. وقام بتخريج أجيالا عديدة من المهندسين المتميزين الذين أثبتوا كفاءتهم
              في شتى المجالات </p>
            </div>
            <div className="col-md-6  text-center">
            <OwelCar/>
{/* 
  <div id="carouselExampleAutoplaying" className="carousel slide " data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active bg-danger "  data-bs-interval="100" >
      <img src={logo} className="d-block sizeImage" alt="..." />
    </div>
    <div className="carousel-item bg-info" data-bs-interval="100">
      <img src={logo2} className="d-block sizeImage " alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="300">
      <img src={logo} className="d-block sizeImage" alt="..." />
    </div> 
   </div> */}

</div> 
  </div>
        </div>
     </div>
 
    </>
}
