import React from 'react';
import { Outlet } from 'react-router-dom';

const SharedProjectLayout = () => {
  return (
    <>       
        <Outlet />               
    </>
  )
}

export default SharedProjectLayout