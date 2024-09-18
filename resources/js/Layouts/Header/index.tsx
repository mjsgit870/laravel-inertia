import { useState } from "react"
import { AppBar, Toolbar, Typography, IconButton, Avatar, Menu, MenuItem, Divider } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import { Link } from '@inertiajs/react'

interface HeaderProps {
  handleDrawerToggle: () => void
}

const Header = ({ handleDrawerToggle }: HeaderProps) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const openMenu = Boolean(anchorEl)

  const handleMenuClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position="fixed" sx={{ width: { sm: `calc(100% - 240px)` }, ml: { sm: `240px` } }}>
      <Toolbar>
        {/* Mobile menu button */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Admin Panel
        </Typography>

        {/* Profile Avatar with Dropdown */}
        <IconButton onClick={handleMenuClick} color="inherit">
          <Avatar />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem component={Link} href="/profile">
            Profile
          </MenuItem>
          <Divider />
          <MenuItem component={Link} href="/logout">
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default Header
