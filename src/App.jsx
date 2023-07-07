import React, { useEffect, useState} from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import Layout from './Component/Layout/Layout';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import NotFound from './Component/NotFound/NotFound';

import Adminlogin from './Component/Adminlogin/Adminlogin';
import About from './Component/About/About';
import Doctors from './Component/Doctors/Doctors';
import Contact from './Component/Contact/Contact';
import Profile from './Component/Profile/Profile';
import Degrees from './Component/Degrees/Degrees';
import PrepStud from './Component/FristYear/FristYear';
import AdminPage from './Component/AdminPage/AdminPage';
import FristYear from './Component/FristYear/FristYear';
import EditStudentData from './Component/EditStudentData/EditStudentData';

import SecondYear from './Component/SecondYear/SecondYear';
import ThirdYear from './Component/ThirdYear/ThirdYear';
import FourthYear from './Component/FourthYear/FourthYear';
import Editsub from './Component/Editsub/Editsub';
import EditDegree from './Component/EditDegree/EditDegree';
import InsertDegree from './Component/InsertDegree/InsertDegree';
import NewAdmin from './Component/NewAdmin/NewAdmin';


export default function App() {
  let [userData,setUserData]= useState(null);
  let [userSub,setUserSub]= useState(null);
  let [userDeg,setUserDeg]= useState(null);
  let [updateDeg,setUpdateDeg]= useState(null);
  
  let [UpdateUserData,setUpdateData]= useState(null);
  let [editidsub,seteditidsub]= useState(null);
  let [editidstud,seteditidstud]= useState(null);
  
      

  function goToEditDeg(idsub,idstud){
    seteditidsub(idsub)
    seteditidstud(idstud)

          
  }
  function saveData(data){
    setUserData(data)
  
  }

  
  function saveSub(data){
    setUserSub(data)
  
  }


  function saveDeg(data){
    setUserDeg(data)
  
  }
  function updateDatast(data){
    setUpdateData(data)
  
  }
  function updateDegst(data){
    setUpdateDeg(data)
  
  }
function logOut(data){
  data="";
  setUserData(data)
  localStorage.removeItem("token")
 
}
  
  let routes = createBrowserRouter([
    {
      path: "", element: <Layout userData={userData} logOut={logOut} />, children: [
        { path: "/", element:<Home /> },
         {path:"about", element:<About/>},
         {path:"doctor", element:<Doctors />},
         {path:"profile", element:<Profile  userData={userData} userSub={userSub} />},
     
        {path:"degrees" , element:<Degrees  userDeg={userDeg}/>},
      
     
         {path:"contact" , element:<Contact/>},
         
        { path: "studlogin", element: <Login saveData={saveData} saveSub={saveSub} saveDeg={saveDeg} /> },
        { path: "Adminlogin", element: <Adminlogin  saveData={saveData}/> },
        { path:"adminpage", element: <AdminPage /> },
        { path:"Register", element: <Register /> },
        { path:"fristyear", element: <FristYear updateDatast={updateDatast} updateDegst={updateDegst}/> },
        { path:"secondyear", element: <SecondYear updateDatast={updateDatast} updateDegst={updateDegst}/> },
        { path:"thirdyear", element: <ThirdYear updateDatast={updateDatast} updateDegst={updateDegst}/> },
        { path:"fourthyear", element: <FourthYear  updateDatast={updateDatast} updateDegst={updateDegst}/> },
        { path:"editstudentdata", element: <EditStudentData UpdateUserData={UpdateUserData}/> },

        {path:"Editsub",element:<Editsub updateDeg={updateDeg} goToEditDeg={goToEditDeg}/>},
        {path:"EditDegree" ,element:<EditDegree  editidsub={editidsub} editidstud={editidstud}/>},
        {path:"insertDegree", element:<InsertDegree/>},
        {path:"adminpage", element:<AdminPage/>},
        {path:"newadmin", element:<NewAdmin/>},
        
        { path: "*", element: <NotFound /> },
      ]
    },
  ])




  return (
    <RouterProvider router={routes} />
  )

  }