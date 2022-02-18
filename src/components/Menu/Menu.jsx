import React from 'react'
import {Button} from '@mui/material'
import {
  BarChart as BarChartIcon,
  Mail as MailIcon,
  Settings as SettingsIcon,
  Home as HomeIcon
} from '@mui/icons-material';
import './Menu.scss'
import { Link } from 'react-router-dom';

function Menu({isMenuOpen}) {
  return (
    <menu className={isMenuOpen ? 'isOpen' : ''}  style={{backgroundImage: 'url(logo192.png)', color: 'red'}}>
        <div className="menu-header">
          
        </div>
        <ul>
            <li>
              <Link to={'/'}>
                <Button>
                  <HomeIcon fontSize='large'/> Главная
                </Button>
              </Link>
            </li>
            <li>
              <Link to={'/stats'}>
                <Button>
                  <BarChartIcon fontSize='large'/> Статистика
                </Button>
              </Link>
            </li>
            <li>
              <Link to={'/mailbox'}>
                <Button>
                  <MailIcon fontSize='large'/> Сообщения
                </Button>
              </Link>
            </li>
            <li>
              <Link to={'/settings'}>
                <Button>
                  <SettingsIcon fontSize='large'/> Настройки
                </Button>
              </Link>
            </li>
        </ul>
    </menu>
  )
}

export default Menu