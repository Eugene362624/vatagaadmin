import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage'
import MailboxPage from './pages/MailboxPage/MailboxPage'
import MainPage from './pages/MainPage/MainPage'
import axios from 'axios'
import { useEffect } from 'react'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import SettingsPage from './pages/SettingsPage/SettingsPage'
import StatsPage from './pages/StatsPage/StatsPage'
import Footer from './components/Footer/Footer'

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const clickMenuHandler = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen)
    console.log(isMenuOpen)
  }

  return (
      <div style={{display: 'flex'}} className='app-wrapper'>
        <Menu isMenuOpen={isMenuOpen}/>
        <div className="column">
          <Header onMenuClick={clickMenuHandler} isMenuOpen={isMenuOpen}/>
          <div className="content-wrapper">
            <Routes>
                <Route path={'/'} element={<MainPage></MainPage>}></Route>
                <Route path={'/login'} element={<LoginPage></LoginPage>}></Route>
                <Route path={'/mailbox'} element={<MailboxPage></MailboxPage>}></Route>
                <Route path={'/settings'} element={<SettingsPage></SettingsPage>}></Route>
                <Route path={'/stats'} element={<StatsPage></StatsPage>}></Route>
            </Routes>
          <Footer/>
          </div>
        </div>
      </div>
  )
}

export default App