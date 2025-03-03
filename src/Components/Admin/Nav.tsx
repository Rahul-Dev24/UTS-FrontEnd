import { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Divider,
    Box,
    useMediaQuery,
    useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const Nav = (props: any) => {
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect if it's a mobile device

    // Handle opening and closing the drawer on mobile view
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    // Navbar links
    const navLinks = (
        <>
            <Button color="inherit" href="#">Dashboard</Button>
            <Button color="inherit" href="#">Users</Button>
            <Button color="inherit" href="#">Tickets</Button>
            <Button color="inherit" href="#">Back</Button>
        </>
    );

    // Drawer content for mobile view
    const drawerContent = (
        <Box sx={{ width: 250 }}>
            <List>
                <ListItem button>
                    <ListItemText onClick={() => navigate("/admin")} primary="Dashboard" />
                </ListItem>
                <ListItem button>
                    <ListItemText onClick={() => navigate("/admin/user")} primary="Users" />
                </ListItem>
                <ListItem button>
                    <ListItemText onClick={() => navigate("/admin/ticket")} primary="Tickets" />
                </ListItem>
                <ListItem button>
                    <ListItemText onClick={() => navigate("/admin/addTrain")} primary="Trains" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Back" onClick={() => navigate("/home")} />
                </ListItem>
            </List>
            <Divider />
        </Box>
    );

    return (
        <AppBar position="sticky" sx={{ backgroundColor: '#ff5722' }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
                    <div className="logo" onClick={() => navigate("/admin")}>
                        <img src="/ir_uts.png" width={30} height={30} style={{ marginTop: "10px" }} />
                    </div>
                    &nbsp;&nbsp;
                    <span >
                        {props?.headerText ? props.headerText : 'Admin Dashboard'}
                    </span>
                </Typography>

                {/* Mobile Menu Icon */}
                {isMobile ? (
                    <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                ) : (
                    // Desktop Navigation Links
                    <Container sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        {navLinks}
                    </Container>
                )}

                {/* Drawer for Mobile Menu */}
                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={toggleDrawer}
                >
                    {drawerContent}
                </Drawer>
            </Toolbar>
        </AppBar>
    )
}

export default Nav
