import { Button } from '@mui/material'
import {
    Search as SearchIcon
} from '@mui/icons-material'
import React from 'react'
import './Search.scss'

function Search() {

    const pages = [
        {name: 'Главная', link: '/', keywords: ['главная']},
        {name: 'Настройки', link: '/settings', keywords: ['настройки', 'настроить', 'тема']},
        {name: 'Сообщения', link: '/mailbox', keywords: ['']},
        {name: 'Главная', link: '/'},
        {name: 'Главная', link: '/'},
    ] 

    return (
        <div className="header-search">
            <input placeholder='Поиск...' type="text" />
            <Button>
                <SearchIcon fontSize='small' />
            </Button>
        </div>
    )
}

export default Search