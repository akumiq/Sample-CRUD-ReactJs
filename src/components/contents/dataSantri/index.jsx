import React, { Component } from 'react'
import { Table } from 'reactstrap'
import { ActionButton, ActionModal } from '../../action'

let idDeleteSantri

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

class Tbody extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: ''
    }
  }

  render() {
    const EditModal = this.state.modalVisible === 'ubah'
    const DeleteModal = this.state.modalVisible === 'delete'

    const className = DeleteModal ? 'justify-content-center border-0' : ''

    const classNameBody = DeleteModal ? 'd-none' : ''

    const titleHeader = EditModal
      ? 'Update Data Santri'
      : DeleteModal
        ? 'Apakah anda yakin ingin menghapus data ini?'
        : ''

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

    const onClickBtn = EditModal
      ? () => {
        this.props.onHandleUpdate()
        this.actionModal.onToggleModal()
      }
      : DeleteModal
        ? () => {
          this.props.onHandleDelete(idDeleteSantri)
          this.actionModal.onToggleModal()
        }
        : () => { }

    return (
      <tbody>
        {
          renderDataSantri(this.props).map((item, id) => (
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
                      this.setState({
                        modalVisible: 'delete'
                      })
                      idDeleteSantri = item.id
                      this.actionModal.onToggleModal()
                    }}
                  />

                  <ActionButton
                    titleButton='Ubah'
                    colorButton='warning'
                    onClickButton={() => {
                      this.setState({
                        modalVisible: 'ubah'
                      })
                      this.props.onDataUpdate(item)
                      this.actionModal.onToggleModal()
                    }}
                  />
                </div>
              </td>
            </tr>
          ))
        }

        <ActionModal
          ref={ref => { this.actionModal = ref }}
          titleHeader={titleHeader}
          titleButton={titleBtn}
          colorButtonLeft={colorBtnLeft}
          colorButtonRight={colorBtnRight}
          outlineButtonLeft={DeleteModal}
          outlineButtonRight={EditModal}
          className={className}
          classNameBody={classNameBody}
          postDataSantri={this.props.postDataSantri}
          isModalVisible={this.isModalVisible}
          onToggleModal={this.onToggleModal}
          onClickButton={onClickBtn}
          onHandleInput={this.props.onHandleInput}
          onHandleUpdate={this.props.onHandleUpdate}
          onHandleDelete={this.props.onHandleDelete}
        />
      </tbody>
    )
  }
}

const renderDataSantri = (props) => {
  return props.value
    ? props.newDataSantri
    : props.dataSantri
}

export default DataSantri
