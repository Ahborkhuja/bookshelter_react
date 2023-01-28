import React from 'react'
import RootLayoutAdmin from '../Layout/RootLayoutAdmin'
import Body from './Body'

function Admin() {
  let Modal;
  const modal =(item)=>{
    Modal = item;
  }
  return (
    <>
      <RootLayoutAdmin />
      <Body />
    </>    
  )
}

export default Admin