import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
    return <>
    <div className='fixed-bottom pt-1 rounded bg-dark text-center '>
  <div className="container">
  <div className="row align-items-center text-white">
    
  <div className="col-4  mt-2 text-muted">
      <p>موقع طلابنا جميع حقوق النشر محفوظة 2023  © <span className="email fw-semibold text-end "> </span> </p>
    </div>
    <div className="col-4  mt-2 text-muted">
      
    </div>
    <div className="col-4 ">
      <Link><i className="email fa-brands fa-twitter ps-4" /></Link>
      <Link><i className=" email fa-brands fa-linkedin ps-4" /></Link>
      <Link to={'https://m.facebook.com/groups/sce.g.azu/?ref=share&mibextid=S66gvF'} target='_blank'><i  className="email fa-brands fa-facebook-f ps-4" /></Link>
    </div>
  </div>
</div>


    </div>
    
    </>
}

