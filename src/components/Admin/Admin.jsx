import React,{useState} from 'react'
import RootLayoutAdmin from '../Layout/RootLayoutAdmin'
import Body from './Body'

function Admin() {
  const [modalShow,setModalShow]=useState(false)
  return (
    <>
      <RootLayoutAdmin setModalShow={setModalShow} />
      <Body modalShow={modalShow} />
    </>    
  )
}

export default Admin