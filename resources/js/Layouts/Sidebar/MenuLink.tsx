import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Link, usePage } from '@inertiajs/react'
import { FiberManualRecordOutlined } from '@mui/icons-material'

interface MenuLinkProps {
  href: string
  icon?: JSX.Element
  label: string
}

export default function MenuLink({ href, icon = <FiberManualRecordOutlined />, label }: MenuLinkProps) {
  const { url } = usePage()
  
  return (
    <ListItemButton
      component={Link}
      href={href}
      selected={url === href}
      sx={{
        '&.Mui-selected': {
          backgroundColor: '#1976d2',
          color: '#fff',
          '& .MuiListItemIcon-root': {
            color: '#fff',
          },
        },
      }}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  )
}