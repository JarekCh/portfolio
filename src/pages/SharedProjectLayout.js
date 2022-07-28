import React from 'react';
import { Outlet } from 'react-router-dom';

const SharedProjectLayout = () => {
  return (
    <>
        <div>.</div>
        <Outlet />
    </>
  )
}

export default SharedProjectLayout