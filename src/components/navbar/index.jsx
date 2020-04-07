import React, { Component } from 'react'
import { Navbar } from 'reactstrap'
import {
  ActionButton,
  ActionModal,
  ActionSearch
} from '../action'

class MenuBar extends Component {
  render() {
    const actionButton = {
      colorButton: 'info',
      titleButton: 'Tambah Santri',
      onClickButton: () => this.actionModal.onToggleModal()
    }

    const actionModal = {
      ref: ref => { this.actionModal = ref },
      titleHeader: 'Tambah Data Santri',
      titleButton: 'Simpan',
      colorButtonLeft: 'info',
      colorButtonRight: 'secondary',
      onClickButton: () => {
        this.props.onHandlePost()
        this.actionModal.onToggleModal()      
      },
      isModalVisible: () => this.state.isModalVisible,
      onToggleModal: () => this.actionModal.onToggleModal()   
    }

    return (
      <div className='container-fluid p-4'>
        <Navbar
          color='light'
          light
          expand='md'
          className='rounded'
        >
          <ActionButton {...actionButton} />

          <ActionModal
            {...actionModal}
            outlineButtonRight
            postDataSantri={this.props.postDataSantri}
            onHandleInput={this.props.onHandleInput}
            onHandlePost={this.props.onHandlePost}
          />

          <ActionSearch
            onSearchSantri={this.props.onSearchSantri}
          />
        </Navbar>
      </div>
    )
  }
}

export default MenuBar
