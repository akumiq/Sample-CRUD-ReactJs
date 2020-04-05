import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'
import { ActionButton } from '../../action'

let idDeleteSantri
let modalVisible

const DataSantri = (props) => {
  return (
    <Table striped className='text-light'>
      <Thead />

      <Tbody {...props} />
    </Table>
  )
}

const Thead = () => {
  return (
    <thead>
      <tr>
        <th
          scope='col'
          style={{ width: '20%' }}
        >
          ID
        </th>
        <th
          scope='col'
          style={{ width: '30%' }}
        >
          Nama
        </th>
        <th
          scope='col'
          style={{ width: '25%' }}
        >
          Jurusan
        </th>
        <th
          scope='col'
          style={{ width: '25%' }}
          className='text-center'
        >
          Action
        </th>
      </tr>
    </thead>
  )
}

const Tbody = (props) => {
  const [isModalVisible, setModal] = useState(false)
  const onToggleModal = () => setModal(!isModalVisible)

  const isDeleteModalVisible = isModalVisible && modalVisible === 'delete'
  const isEditModalVisible = isModalVisible && modalVisible === 'edit'

  return (
    <tbody>
      {
        renderDataSantri(props).map((item, id) => (
          <tr key={id}>
            <th scope='row'>{item.id}</th>
            <td>{item.name}</td>
            <td>{item.studyProgram}</td>
            <td>
              <div className='row justify-content-center'>
                <ActionButton
                  titleButton='Hapus'
                  colorButton='danger'
                  className='mr-2'
                  onClickButton={() => {
                    idDeleteSantri = item.id
                    modalVisible = 'delete'
                    onToggleModal()
                  }}
                />

                <ActionButton
                  titleButton='Ubah'
                  colorButton='warning'
                  onClickButton={() => {
                    props.onDataUpdate(item)
                    modalVisible = 'edit'
                    onToggleModal()
                  }}
                />
              </div>
            </td>
          </tr>
        ))
      }

      <ActionModal
        postDataSantri={props.postDataSantri}
        isModalVisible={isDeleteModalVisible}
        onToggleModal={onToggleModal}
        onHandleInput={props.onHandleInput}
        onHandleDelete={props.onHandleDelete}
      />

      <ActionModal
        postDataSantri={props.postDataSantri}
        isModalVisible={isEditModalVisible}
        onToggleModal={onToggleModal}
        onHandleInput={props.onHandleInput}
        onHandleUpdate={props.onHandleUpdate}
      />
    </tbody>
  )
}

const renderDataSantri = (props) => {
  return props.value
    ? props.newDataSantri
    : props.dataSantri
}

const ActionModal = (props) => {
  const EditModal = modalVisible === 'edit'

  return (
    <Modal
      isOpen={props.isModalVisible}
      toggle={() => props.onToggleModal}
    >

      <ActionModalHeader
        onToggleModal={props.onToggleModal}
      />

      <ActionModalBody
        isBodyVisible={EditModal}
        postDataSantri={props.postDataSantri}
        onHandleInput={props.onHandleInput}
      />

      <ActionModalFooter
        onToggleModal={props.onToggleModal}
        onHandleUpdate={props.onHandleUpdate}
        onHandleDelete={props.onHandleDelete}
      />
    </Modal>
  )
}

const ActionModalHeader = (props) => {
  const EditModal = modalVisible === 'edit'
  const DeleteModal = modalVisible === 'delete'

  const onToggleHeader = EditModal
    ? props.onToggleModal
    : DeleteModal
      ? null
      : () => { }

  const className = DeleteModal ? 'justify-content-center border-0' : ''

  const titleHeader = EditModal
    ? 'Update Data Santri'
    : DeleteModal
      ? 'Apakah anda yakin ingin menghapus data ini?'
      : ''

  return (
    <ModalHeader
      toggle={onToggleHeader}
      className={className}
    >
      {titleHeader}
    </ModalHeader>
  )
}

const ActionModalBody = (props) => {
  if (props.isBodyVisible) {
    return (
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for='name'>Nama Santri</Label>
            <Input
              type='text'
              name='name'
              id='name'
              placeholder='nama santri'
              value={props.postDataSantri.name}
              onChange={(e) => props.onHandleInput(e)}
            />
          </FormGroup>

          <FormGroup>
            <Label for='studyProgram'>Program Study Santri</Label>
            <Input
              type='text'
              name='studyProgram'
              id='studyProgram'
              placeholder='nama santri'
              value={props.postDataSantri.studyProgram}
              onChange={(e) => props.onHandleInput(e)}
            />
          </FormGroup>
        </Form>
      </ModalBody>
    )
  } else {
    return null
  }
}

const ActionModalFooter = (props) => {
  const EditModal = modalVisible === 'edit'
  const DeleteModal = modalVisible === 'delete'

  const className = DeleteModal ? 'justify-content-center border-0' : ''

  const titleBtn = EditModal
    ? 'Ubah'
    : DeleteModal
      ? 'Hapus'
      : ''

  const colorBtnLeft = EditModal
    ? 'info'
    : DeleteModal
      ? 'secondary'
      : ''

  const colorBtnRight = EditModal
    ? 'secondary'
    : DeleteModal
      ? 'info'
      : ''

  const onClick = EditModal
    ? () => {
      props.onHandleUpdate()
      props.onToggleModal()
    }
    : DeleteModal
      ? () => {
        props.onHandleDelete(idDeleteSantri)
        props.onToggleModal()
      }
      : () => { }

  return (
    <ModalFooter className={className}>
      <ActionButton
        titleButton={titleBtn}
        colorButton={colorBtnLeft}
        className='px-5'
        outlineButton={DeleteModal}
        onClickButton={onClick}
      />

      <ActionButton
        titleButton='Batal'
        colorButton={colorBtnRight}
        className='px-5'
        outlineButton={EditModal}
        onClickButton={props.onToggleModal}
      />
    </ModalFooter>
  )
}

Tbody.propTypes = {
  postDataSantri: PropTypes.object,
  onDataUpdate: PropTypes.func,
  onHandleInput: PropTypes.func,
  onHandleUpdate: PropTypes.func,
  onHandleDelete: PropTypes.func
}

ActionModal.propTypes = {
  postDataSantri: PropTypes.object,
  isModalVisible: PropTypes.bool,
  onToggleModal: PropTypes.func,
  onHandleInput: PropTypes.func,
  onHandleUpdate: PropTypes.func,
  onHandleDelete: PropTypes.func
}

ActionModalHeader.propTypes = {
  onToggleModal: PropTypes.func
}

ActionModalBody.propTypes = {
  form: PropTypes.string,
  postDataSantri: PropTypes.object,
  onHandleInput: PropTypes.func
}

ActionModalFooter.propTypes = {
  onToggleModal: PropTypes.func,
  onHandleUpdate: PropTypes.func,
  onHandleDelete: PropTypes.func
}

export default DataSantri
