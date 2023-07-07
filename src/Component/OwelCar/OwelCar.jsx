import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import logo1 from "../../assets/about1.jpg"
import logo2 from "../../assets/about2.jpeg"
import logo3 from "../../assets/about3.jpeg"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function OwelCar() {
  return (
    
    <OwlCarousel className='owl-theme ' autoPlay={true} autoplayTimeout={1000} autoplaySpeed={true} dots={true} loop items={1}>
    
    <img  height={300} src={logo1} className=" w-100 " alt="..." />
   
  
    <img  height={300}  src={logo2} className="w-100 " alt="..." />
    <img  height={300}  src={logo3} className="w-100 " alt="..." />
    
   
</OwlCarousel>
  )
}
