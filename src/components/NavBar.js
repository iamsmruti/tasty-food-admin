import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <AppBar>
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <Typography>Tasty Foods</Typography>
                <Box>
                    <Button sx={{ textTransform: 'capitalize' }} onClick={() => navigate('/')} variant="link">View All</Button>
                    <Button sx={{ textTransform: 'capitalize' }} onClick={() => navigate('/create')} variant="link">Create</Button>
                </Box>
            </Toolbar>


        </AppBar>
    );
}

export default Navbar;