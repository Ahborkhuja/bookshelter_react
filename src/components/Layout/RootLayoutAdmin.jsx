import React,{useState} from 'react'
import Header from '../Admin/Header';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function RootLayoutAdmin(p) {
  return (
    <>
      <Header setModalShow={p.setmodalShow} />
      <main>
        <Outlet />
      </main>
    </>)
}

export default RootLayoutAdmin