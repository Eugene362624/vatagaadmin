import { Breadcrumbs, Typography, Link as LinkStyle } from '@mui/material'
import { Link } from 'react-router-dom'

export const BreadcrumbsComponent = ({links, page, separator = '/'}) => {
    return (
        <Breadcrumbs fontSize={'small'} separator={separator} aria-label="breadcrumb">
            {links.map(e => {
                return (
                    <Link to={e.link}>
                        <LinkStyle key="1" color="inherit">
                            {e.name}
                        </LinkStyle>
                    </Link>
                )
            })}
            <Typography fontSize={'small'} key="3" color="text.primary">
                {page}
            </Typography>
        </Breadcrumbs>
    )
}