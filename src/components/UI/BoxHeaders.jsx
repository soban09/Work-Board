import React, { useState } from 'react'
import { BsPlusLg } from "react-icons/bs";

import Modal from "../Modal/Modal";

const BoxHeaders = ({heading, total}) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <>
      {showModal && <Modal closeModal={closeModal}/>}
      <div className='box-header'>
        <h2 className='box-heading'>{heading} <span>{total}</span></h2>
        {heading==='Todo' ? <div onClick={openModal} className='box-option'><BsPlusLg className='box-option-icon'/></div> : <></>}
      </div>
    </>
  )
}

export default BoxHeaders