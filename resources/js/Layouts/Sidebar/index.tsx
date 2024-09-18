import { useState } from 'react'
import { Drawer, List } from '@mui/material'
import { Home, Settings, AccountCircle } from '@mui/icons-material'
import { useTheme, useMediaQuery } from '@mui/material'

// components
import MenuLink from './MenuLink'
import DropdownMenu from './DropdownMenu'
import Section from './Section'

const drawerWidth = 240

interface SidebarProps {
  mobileOpen: boolean
  handleDrawerToggle: () => void
}

const Sidebar = ({ mobileOpen, handleDrawerToggle }: SidebarProps) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const [openSettings, setOpenSettings] = useState(false)

  const handleSettingsClick = () => {
    setOpenSettings(!openSettings) // Toggle dropdown
  }

  const drawerContent = (
    <List>
      {/* Section 1: General */}
      <Section text='General' />
      <MenuLink href="/dashboard" icon={<Home />} label="Dashboard" />

      {/* Section 2: Management */}
      <Section text='Management' />
      <DropdownMenu icon={<Settings />} label='Settings' items={[
        { href: '/profile-settings', label: 'Profile Settings' },
        { href: '/app-settings', label: 'App Settings' },
      ]} />

      {/* Section 3: User */}
      <Section text='User' />
      <MenuLink href="/profile" icon={<AccountCircle />} label="Profile" />
    </List>
  )

  return (
    <>
      {/* Drawer for mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Drawer for desktop */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </>
  )
}

export default Sidebar
