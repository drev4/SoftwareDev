import * as React from 'react';
import {
    AppBar, Badge,
    Box,
    Container, createTheme, CssBaseline, Divider, Grid,
    IconButton,
    Paper, ThemeProvider,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Copyright} from "@mui/icons-material";
import DashboardChart from "../../components/DashboardChart";
import Deposits from "../../components/Deposits";
import Orders from "../../components/Orders";
import LeftDrawer from "../../components/LeftDrawer";
import Title from "../../components/Title";
const mdTheme = createTheme({
    palette: {
        white: {
            main: "#FFF"
        }
    }
});
function Dashboard() {

    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{display: 'flex'}}>
                <CssBaseline />
                <AppBar color="white" position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            Dashboard
                        </Typography>
                        <IconButton onClick={toggleDrawer} color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <LeftDrawer open={open} toogleDrawer={toggleDrawer} />

                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Title>Hello, Diego</Title>

                        <Divider sx={{ mt: 2, mb: 4 }}/>

                        <Grid container spacing={3}>
                            {/* DashboardChart */}
                            <Grid item xs={12} md={8} lg={9}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 240,
                                        borderRadius: '20px'
                                    }}
                                >
                                    <DashboardChart />
                                </Paper>
                            </Grid>
                            {/* Recent Deposits */}
                            <Grid item xs={12} md={4} lg={3}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 240,
                                        borderRadius: '20px'
                                    }}
                                >
                                    <Deposits />
                                </Paper>
                            </Grid>
                            {/* Recent Orders */}
                            <Grid item xs={12}>
                                <Paper elevation={0} sx={{ p: 2, display: 'flex', flexDirection: 'column', borderRadius: '20px' }}>
                                    <Orders />
                                </Paper>
                            </Grid>
                        </Grid>
                        <Copyright sx={{ pt: 4 }} />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>

    );
}

export default Dashboard;