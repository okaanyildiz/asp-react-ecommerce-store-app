import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

export default function Header() {
    return (
        <AppBar position="static" sx={{ mb: 4 }} style={{ background: '#432C7A' }}>
            <Toolbar>
                <Typography variant="h6">
                    RE-STORE
                </Typography>
                <Switch />
            </Toolbar>
        </AppBar>
    )
}