import React from 'react';
import AddNews from '../admin/addNew';

import {Navigate, Outlet} from 'react-router-dom'

const useAuth=()=>{
  const user=localStorage.getItem('token')
  if(user){
    return true
  } else {
    return false
  }
}

const  ProtectedRoutes=(props) =>{

  const auth=useAuth()

  return auth?<AddNews/>: <Navigate to="/"/>
}

export default ProtectedRoutes;