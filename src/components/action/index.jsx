import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Collapse,
  Nav,
  NavItem,
  Input,
  Form,
  FormGroup,
  Label
} from 'reactstrap'

const ActionButton = (props) => {
  return (
    <Button
      color={props.colorButton}
      outline={props.outlineButton}
      className={props.className}
      onClick={props.onClickButton}
    >
      {props.titleButton}
    </Button>
  )
}

const CustomInput = (props) => {
  return (
    <Input
      type={props.typeInput}
      name={props.nameInput}
      id={props.idInput}
      className={props.className}
      placeholder={props.placeholderInput}
      value={props.valueInput}
      onChange={props.onChangeInput}
    />
  )
}

const ActionModalNavbar = (props) => {
  return (
    <Modal
      isOpen={props.isModalVisible}
    >
      <ActionModalHeader
        titleHeader={props.titleHeader}
        onToggleModal={props.onToggleModal}
      />
      <ActionModalBody
        postDataSantri={props.postDataSantri}
        onHandleInput={props.onHandleInput}
      />
      <ActionModalFooter
        onToggleModal={props.onToggleModal}
        onHandlePost={props.onHandlePost}
      />
    </Modal>
  )
}

const ActionModalHeader = (props) => {
  return (
    <ModalHeader
      toggle={() => props.onToggleModal()}
    >
      {props.titleHeader}
    </ModalHeader>
  )
}

const ActionModalBody = (props) => {
  return (
    <ModalBody>
      <Form>
        <ActionFormBody
          label='name'
          nameLabel='Nama Santri'
          typeInput='text'
          nameInput='name'
          idInput='name'
          placeholderInput='nama santri'
          valueInput={props.postDataSantri.name}
          onChangeInput={(e) => props.onHandleInput(e)}
        />

        <ActionFormBody
          label='studyProgram'
          nameLabel='Jurusan Santri'
          typeInput='text'
          nameInput='studyProgram'
          idInput='studyProgram'
          placeholderInput='jurusan santri'
          valueInput={props.postDataSantri.studyProgram}
          onChangeInput={(e) => props.onHandleInput(e)}
        />
      </Form>
    </ModalBody>
  )
}

const ActionFormBody = (props) => {
  return (
    <FormGroup>
      <Label for={props.label}>{props.nameLabel}</Label>
      <CustomInput {...props} />
    </FormGroup>
  )
}

const ActionModalFooter = (props) => {
  return (
    <ModalFooter>
      <ActionButton
        titleButton='Simpan'
        colorButton='info'
        className='px-5'
        onClickButton={() => {
          props.onHandlePost()
          props.onToggleModal()
        }}
      />

      <ActionButton
        titleButton='Batal'
        colorButton='secondary'
        className='px-5'
        outlineButton
        onClickButton={props.onToggleModal}
      />
    </ModalFooter>
  )
}

const ActionSearch = (props) => {
  return (
    <Collapse navbar>
      <Nav className='ml-auto'>
        <NavItem>
          <CustomInput
            typeInput='search'
            className='form-control mr-sm-2'
            placeholderInput='cari santri'
            onChangeInput={(e) => props.onSearchSantri(e)}
          />
        </NavItem>
      </Nav>
    </Collapse>
  )
}

ActionButton.propTypes = {
  titleButton: PropTypes.string,
  colorButton: PropTypes.string,
  className: PropTypes.string,
  outlineButton: PropTypes.bool,
  onClickButton: PropTypes.func
}

CustomInput.propTypes = {
  typeInput: PropTypes.string,
  nameInput: PropTypes.string,
  idInput: PropTypes.string,
  className: PropTypes.string,
  placeholderInput: PropTypes.string,
  valueInput: PropTypes.string,
  onChangeInput: PropTypes.func
}

ActionModalNavbar.propTypes = {
  titleHeader: PropTypes.string,
  postDataSantri: PropTypes.object,
  isModalVisible: PropTypes.bool,
  onToggleModal: PropTypes.func,
  onHandleInput: PropTypes.func,
  onHandlePost: PropTypes.func
}

ActionModalHeader.propTypes = {
  titleHeader: PropTypes.string,
  onToggleModal: PropTypes.func
}

ActionModalBody.propTypes = {
  postDataSantri: PropTypes.object,
  onHandleInput: PropTypes.func
}

ActionFormBody.propTypes = {
  label: PropTypes.string,
  nameLabel: PropTypes.string
}

ActionModalFooter.propTypes = {
  onToggleModal: PropTypes.func,
  onHandlePost: PropTypes.func
}

ActionSearch.propTypes = {
  onSearchSantri: PropTypes.func
}

export { ActionButton, ActionModalNavbar, ActionSearch }
