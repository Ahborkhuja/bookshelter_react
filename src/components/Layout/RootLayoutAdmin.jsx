import React from 'react';
import Header from '../Admin/Header';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function RootLayoutAdmin(p) {
  return (
    <>
      <Header />
      <main style={{ margin: "40px" }}>
        <Outlet />
      </main>
    </>)
}

export default RootLayoutAdmin