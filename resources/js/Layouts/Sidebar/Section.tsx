import { Divider, Typography } from "@mui/material"

interface SectionProps {
  text: string
}

export default function Section({ text }: SectionProps) {
  return (
    <>
      <Typography 
        variant="h6" 
        sx={{ padding: '10px 16px', marginTop: '10px' }}
      >
        {text}
      </Typography>
      <Divider />
    </>
  )
}