import React, { Component } from 'react'
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

class ActionModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalVisible: false
    }
  }

  onToggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible
    })
  }

  render() {
    return (
      <Modal
        isOpen={this.state.isModalVisible}
        toggle={this.onToggleModal}
      >
        {this.renderActionModalHeader()}
        {this.renderActionModalBody()}
        {this.renderActionModalFooter()}

      </Modal>
    )
  }

  renderActionModalHeader() {
    return (
      <ModalHeader
        className={this.props.className}
      >
        {this.props.titleHeader}
      </ModalHeader>
    )
  }

  renderActionModalBody() {
    return (
    <ModalBody className={this.props.classNameBody}>
      <Form>
        <ActionFormGroup
          label='name'
          nameLabel='Nama Santri'
          typeInput='text'
          nameInput='name'
          idInput='name'
          placeholderInput='nama santri'
          valueInput={this.props.postDataSantri.name}
          onChangeInput={(e) => this.props.onHandleInput(e)}
        />

        <ActionFormGroup
          label='studyProgram'
          nameLabel='Jurusan Santri'
          typeInput='text'
          nameInput='studyProgram'
          idInput='studyProgram'
          placeholderInput='jurusan santri'
          valueInput={this.props.postDataSantri.studyProgram}
          onChangeInput={(e) => this.props.onHandleInput(e)}
        />
      </Form>
    </ModalBody>
    )
  }

  renderActionModalFooter() {
    return (
      <ModalFooter className={this.props.className}>
        <ActionButton
          titleButton={this.props.titleButton}
          colorButton={this.props.colorButtonLeft}
          className='px-5'
          outlineButton={this.props.outlineButtonLeft}
          onClickButton={this.props.onClickButton}
        />
  
        <ActionButton
          titleButton='Batal'
          colorButton={this.props.colorButtonRight}
          className='px-5'
          outlineButton={this.props.outlineButtonRight}
          onClickButton={this.onToggleModal}
        />
      </ModalFooter>
    )
  }
}

const ActionFormGroup = (props) => {
  return (
    <FormGroup>
      <Label for={props.label}>{props.nameLabel}</Label>
      <CustomInput {...props} />
    </FormGroup>
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

ActionFormGroup.propTypes = {
  label: PropTypes.string,
  nameLabel: PropTypes.string
}

ActionSearch.propTypes = {
  onSearchSantri: PropTypes.func
}

export { ActionButton, ActionModal, ActionSearch }
