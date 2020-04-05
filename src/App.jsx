import React, { Component } from 'react'
import Header from './components/header'
import MenuBar from './components/navbar'
import Contents from './components/contents'

class App extends Component {
  render () {
    return (
      <div 
        className='bg-info text-light'
        style={{ minHeight: '100vh' }}
      >
        <Header />

        <MenuBar />

        <Contents />
      </div>
    )
  }
}

export default App;
