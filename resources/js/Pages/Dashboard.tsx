import { Grid2, Paper, Typography } from "@mui/material"

// layouts
import AdminLayout from "../Layouts/Admin"

export default function DashboardPage() {
  return (
    <AdminLayout>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Grid2 container spacing={3}>
        <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Card 1</Typography>
            <Typography variant="body1">Some content here...</Typography>
          </Paper>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Card 2</Typography>
            <Typography variant="body1">Some content here...</Typography>
          </Paper>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Card 3</Typography>
            <Typography variant="body1">Some content here...</Typography>
          </Paper>
        </Grid2>
      </Grid2>
    </AdminLayout>
  )
}