import React from 'react'
import Header from '../User/Header'
import { Outlet } from 'react-router-dom';


function RootLayoutUser() {
  return (
    <>
      <Header />
      <main style={{ margin: "40px" }}>
        <Outlet />
      </main>
    </>
  )
}

export default RootLayoutUser