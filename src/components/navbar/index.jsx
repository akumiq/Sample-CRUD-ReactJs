import React from 'react'
import { Navbar, Button, Collapse, Nav, NavItem, Input } from 'reactstrap'

const MenuBar = () => {
  return (
    <div className='container-fluid p-4'>
      <Navbar
        color='light'
        light
        expand='md'
        className='rounded'
      >
        <Button
          color='info'
        >
          Tambah Santri
        </Button>

        <Collapse navbar>
          <Nav className='ml-auto'>
            <NavItem>
              <Input
                type='search'
                className='form-control mr-sm-2'
                placeholder='cari santri'
              />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default MenuBar
