import { Link as LinkStyle } from '@mui/material'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import React from 'react'
import './SettingsPage.scss'
import { BreadcrumbsComponent as Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'

function SettingsPage() {



  return (
      <div className='content'>
        <Typography fontSize={30}>Настройки</Typography>
        <Breadcrumbs links={[{name: 'Главная', link: '/'}]} page={'Настройки'}></Breadcrumbs>
        <div className="line"></div>
        <div className='card-wrapper'>
            <div className="card"></div>
            <div className="card"></div>
        </div>
      </div>
  )
}

export default SettingsPage