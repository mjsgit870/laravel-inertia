import React from 'react'
import { Box, Button, TextField, Typography, Container, Paper, Avatar, CircularProgress } from '@mui/material'
import { LockOutlined } from '@mui/icons-material'
import { useForm, usePage } from '@inertiajs/react'
import Alert from '../../Components/Alert'

export default function Login() {
  const { flash } = usePage().props as any

  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  })
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    post('/auth/login')
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={6} sx={{ padding: 4, mt: 8 }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>

          {flash.error && (
            <Alert message={flash.error} severity='error' style={{ width: '100%', marginTop: '10px' }} />
          )}

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={data.email}
              onChange={e => setData('email', e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={data.password}
              onChange={e => setData('password', e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
              disabled={processing}
            >
              {processing ? <CircularProgress size={24} /> : 'Login'}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  )
}
