import { useState } from "react";
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import { Link } from "react-router-dom";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
    const [anchorNav, setAnchorNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorNav(null);
    };

    return (
        <AppBar position="static" sx={{ bgcolor: "black" }}>
            <Toolbar>
                {/* Logo */}
                <BeenhereIcon sx={{ mr: 1 }} />
                <Typography variant="h6" sx={{ flexGrow: 1 }}>Material UI </Typography>

                {/* Desktop Menu */}
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                    <Button color="inherit" component={Link} to="/">
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/about">
                        About
                    </Button>
                    <Button color="inherit" component={Link} to="/services">
                        Services
                    </Button>
                    <Button color="inherit" component={Link} to="/contact">
                        Contact
                    </Button>
                </Box>

                {/* Mobile Menu Icon */}
                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                    <IconButton color="inherit" onClick={handleOpenNavMenu}>
                        <MenuIcon />
                    </IconButton>

                    <Menu anchorEl={anchorNav} open={Boolean(anchorNav)} onClose={handleCloseNavMenu}>
                        <MenuItem onClick={handleCloseNavMenu} component={Link} to="/">
                            Home
                        </MenuItem>
                        <MenuItem onClick={handleCloseNavMenu} component={Link} to="/about">
                            About
                        </MenuItem>
                        <MenuItem onClick={handleCloseNavMenu} component={Link} to="/services">
                            Services
                        </MenuItem>
                        <MenuItem onClick={handleCloseNavMenu} component={Link} to="/contact">
                            Contact
                        </MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
