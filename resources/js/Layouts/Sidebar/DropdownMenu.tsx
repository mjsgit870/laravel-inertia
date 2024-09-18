import { useEffect, useState } from 'react'
import { ListItemButton, ListItemIcon, ListItemText, Collapse, List } from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'

// components
import MenuLink from './MenuLink'
import { usePage } from '@inertiajs/react'

interface DropdownMenuProps {
  icon: JSX.Element
  label: string
  items: {
    label: string
    href: string
  }[]
}

export default function DropdownMenu({ icon, label, items }: DropdownMenuProps) {
  const { url } = usePage()

  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen(!open)
  }

  useEffect(() => {
    const isActive = items.some((item) => url.startsWith(item.href))
    if (isActive) {
      setOpen(true)
    }
  }, [url, items])

  return (
    <>
      <ListItemButton onClick={handleToggle}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={label} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items.map((item) => (
            <MenuLink href={item.href} label={item.label} />
          ))}
        </List>
      </Collapse>
    </>
  )
}