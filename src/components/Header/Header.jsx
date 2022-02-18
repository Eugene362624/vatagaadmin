import React, { useState } from 'react'
import {
  Search as SearchIcon, 
  Menu as MenuIcon, 
  Notifications as NotificationsIcon,
  ChatBubble as ChatIcon,
  Logout as LogoutIcon,
  Person as PersonIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';
import './Header.scss'
import { Avatar, Badge, IconButton, Button, Typography, MenuItem, Menu, ButtonGroup, Tooltip } from '@mui/material';
import Search from '../Search/Search';

function Header({onMenuClick, isMenuOpen}) {

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = (event) => {
    setAnchorElUser(null)
  }

  return (
    <header>
        <div className="header-left">
          <Tooltip disableInteractive arrow title={isMenuOpen ? 'Свернуть меню' : 'Развернуть меню'}>
            <IconButton onClick={() => onMenuClick()}>
              <MenuIcon/>
            </IconButton>
          </Tooltip>
        </div>
        <div className="header-middle">
          <Search/>
        </div>
        <div className="header-right">
          <IconButton>
            <Badge badgeContent={4} color="primary">
              <NotificationsIcon/>
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={4} color="primary">
              <ChatIcon/>
            </Badge>
          </IconButton>
          <IconButton onClick={handleOpenUserMenu}>
            <Avatar>EM</Avatar>
          </IconButton>
          <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <>
                  <Button onClick={handleCloseUserMenu} >
                    <PersonIcon></PersonIcon> Профиль
                  </Button>
                  <Button onClick={handleCloseUserMenu} >
                    <LogoutIcon></LogoutIcon> Выйти
                  </Button>
                  <Button onClick={handleCloseUserMenu} >
                    <SettingsIcon></SettingsIcon> Настройки
                  </Button>
                  </>
            </Menu>
        </div>
    </header>
  )
}

export default Header