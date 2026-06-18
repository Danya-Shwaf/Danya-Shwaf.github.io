import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { Menu, Brightness4, Brightness7 } from "@mui/icons-material";
import { useState } from "react";

const navLinks = [
  { label: "Portfolio", to: "/" },
  { label: "Blog", to: "/blog" },
  { label: "Gallery", to: "/gallery" },
  { label: "Calculator", to: "/calculator" },
  { label: "Contact", to: "/contact" },
];

function Navbar({ darkMode, toggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="sticky" color="inherit">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Danya Shawaf
          </Typography>

          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              gap: 2,
            }}
          >
            {navLinks.map((link) => (
              <Button
                key={link.to}
                component={NavLink}
                to={link.to}
                sx={{
                  color: "text.primary",
                  fontWeight: ({ palette }) =>
                    palette.mode === "dark" ? 600 : 500,
                }}
                style={({ isActive }) => ({
                  borderBottom: isActive ? "2px solid" : "none",
                })}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          <IconButton onClick={toggleTheme} aria-label="Toggle theme">
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

          <IconButton
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
            }}
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 250 }}>
          {navLinks.map((link) => (
            <ListItem key={link.to} disablePadding>
              <Button
                fullWidth
                component={NavLink}
                to={link.to}
                onClick={() => setOpen(false)}
                sx={{ justifyContent: "flex-start" }}
              >
                {link.label}
              </Button>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
