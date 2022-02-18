import { Button, ButtonGroup, Typography } from '@mui/material'
import React from 'react'
import './Footer.scss'

function Footer() {
  return (
    <footer>
        <ButtonGroup variant="text">
            <Button size="small">
                Помощь
            </Button>
            <Button size="small">
                Напишите нам
            </Button>
            <Button size="small">
                Политика приватности
            </Button>
            <Button size="small">
                Правила пользованием
            </Button>
        </ButtonGroup>
        <Typography fontSize={'small'}>
            &copy; {new Date().getFullYear()} - Vataga Admin
        </Typography>
    </footer>
  )
}

export default Footer