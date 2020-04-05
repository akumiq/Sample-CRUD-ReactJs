import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Navbar } from 'reactstrap'
import { ActionButton, ActionModalNavbar, ActionSearch } from '../action'

const MenuBar = (props) => {
  const [isModalVisible, setModal] = useState(false)
  const onToggleModal = () => setModal(!isModalVisible)

  return (
    <div className='container-fluid p-4'>
      <Navbar
        color='light'
        light
        expand='md'
        className='rounded'
      >
        <ActionButton
          colorButton='info'
          titleButton='Tambah Santri'
          onClickButton={onToggleModal}
        />

        <ActionModalNavbar
          titleHeader='Tambah Data Santri'
          postDataSantri={props.postDataSantri}
          isModalVisible={isModalVisible}
          onToggleModal={onToggleModal}
          onHandleInput={props.onHandleInput}
          onHandlePost={props.onHandlePost}
        />

        <ActionSearch
          onSearchSantri={props.onSearchSantri}
        />
      </Navbar>
    </div>
  )
}

MenuBar.propTypes = {
  postDataSantri: PropTypes.object,
  onHandleInput: PropTypes.func,
  onHandlePost: PropTypes.func,
  onSearchSantri: PropTypes.func
}

export default MenuBar
