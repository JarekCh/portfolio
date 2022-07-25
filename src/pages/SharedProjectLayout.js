import React from 'react';
import { Outlet } from 'react-router-dom';

const SharedProjectLayout = () => {
  return (
    <>
        <div>projects</div>
        <Outlet />
    </>
  )
}

export default SharedProjectLayout