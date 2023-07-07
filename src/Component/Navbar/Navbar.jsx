import React from 'react'
import { Link, NavLink } from 'react-router-dom'

 import "./Navbar.css"


export default function Navbar({ userData,logOut}) {
    return <>
        <nav className="navbar navbar-expand-sm  ">
  <div className="container">
    <div className="webname d-flex" ><i class="fa-solid fa-graduation-cap me-5 fs-2 "></i><span className=' me-3 fs-2'>طلابنا</span></div>
       
    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
     data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" 
     aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavId">

    {userData?"":
    <>
      <ul className="navbar-nav me-auto mt-2 mt-lg-0 ">
        <li className="nav-item ">
          <NavLink className={({isActive})=> isActive==true?'nav-link active':'nav-link'}
           to="/" aria-current="page">الصفحة الرئيسية <span className="visually-hidden">
            (current)</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=> isActive==true?'nav-link active':'nav-link'} 
          to="about" aria-current="page">نبذة عن القسم <span className="visually-hidden">
            (current)</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=> isActive==true?'nav-link active':'nav-link'} to="doctor" aria-current="page">  أساتذة القسم <span className="visually-hidden">(current)</span></NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className={({isActive})=> isActive==true?'nav-link active':'nav-link'} to="contact" aria-current="page">  اتصل بنا <span className="visually-hidden">(current)</span></NavLink>
        </li>
      </ul>
      </>
}
{userData?"":
      <>
      <ul className="navbar-nav ms-auto mt-2 mt-lg-0 d-flex ">
        <li className="nav-item">
          <Link> <i className="email fa-brands fa-twitter ps-4" /></Link>

         
      
      
        </li>
        <li className="nav-item">
          <Link to={'https://m.facebook.com/groups/sce.g.azu/?ref=share&mibextid=S66gvF'} target='_blank'><i className=" email fa-brands fa-facebook-f ps-4" /></Link>
        </li>
        <li className="nav-item">
          <Link><i className="email fa-brands fa-linkedin ps-4" /></Link>
        </li>
      
      </ul>
      </>
}
      {userData?
          <ul  className="navbar-nav ms-auto mt-2 mt-lg-0 d-flex align-items-center">
    
            <li className="nav-item ps-3">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="profile">الصفحة الشخصية</NavLink>
              </li>
              <li className="nav-item  ps-3">
          <NavLink  className={({isActive})=> isActive==true?'nav-link active':'nav-link'}
           to="/degrees" aria-current="page">الدرجات والمواد<span className="visually-hidden">
            (current)</span></NavLink>
                    
              </li>
              </ul>
            :""}

            {userData?
            <ul className="navbar-nav me-auto mt-2 mt-lg-0 d-flex align-items-center">
             <li className="nav-item ps-3 ">
          <NavLink onClick={logOut} className={({isActive})=> isActive==true?'nav-link active':'nav-link'}
           to="/" aria-current="page">تسجيل خروج<span className="visually-hidden">
            (current)</span></NavLink>
                    
              </li>

        

          
              </ul>:""}
             
    </div>
  </div>
</nav>

        
    </>
}

