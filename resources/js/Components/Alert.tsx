import { Alert as MuiAlert, AlertTitle, AlertProps as MUIAlertProps } from '@mui/material'

interface AlertProps extends MUIAlertProps {
  severity: 'error' | 'info' | 'success' | 'warning'
  title?: string
  message: string
  onClose?: () => void
}

export default function Alert({ severity, title, message, onClose, ...props }: AlertProps) {
  return (
    <MuiAlert severity={severity} onClose={onClose} sx={{ mb: 2 }} {...props}>
      {title && <AlertTitle>{title}</AlertTitle>}
      {message}
    </MuiAlert>
  )
}