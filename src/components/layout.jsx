import * as React from 'react';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setData, updateData } from '../features/dataSlice';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import CanvasEditor from './CanvasEditor';
import ColorPicker from './ColorPicker';
import FileUpload from './FileUpload';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            Customise your ad and get the template accordingly.
        </Typography>
    );
}

const defaultTheme = createTheme();

export default function SignInSide() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };


    const Root = styled('div')(({ theme }) => ({
        width: '100%',
        ...theme.typography.body2,
        color: theme.palette.text.secondary,
        '& > :not(style) ~ :not(style)': {
            marginTop: theme.spacing(2),
        },
    }));


    const dispatch = useDispatch();
    const [flag, setFlag] = useState(true)
    const [values, setValues] = useState({
        caption: "1 & 2 BHK Luxury Apartments at just Rs.34.97 Lakhs",
        cta: "Shop Now",
        bgColor: "#0369A1",
        image: "https://source.unsplash.com/random?wallpapers"
    })

    useEffect(() => {
        if (flag) {
            dispatch(setData(values))
            setFlag(false)
        } else {
            dispatch(updateData(values))
        }
    }, [values])

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <CanvasEditor />
                </Grid>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: '#1976D2' }}>
                            <TipsAndUpdatesIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Ad Customization
                        </Typography>
                        <Copyright />
                        <FileUpload />
                        <Root>
                            <Divider>
                                <Chip label="Edit Contents" size="small" />
                            </Divider>
                        </Root>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                fullWidth
                                id="text"
                                label={values.caption? "" : "Ad Content"}
                                name="text"
                                autoFocus
                                value={values.caption} 
                                onChange={(e) => setValues({ ...values, caption: e.target.value })}
                            />
                            <TextField
                                margin="normal"
                                fullWidth
                                name="text"
                                label={values.cta ? "" : "CTA"}
                                type="text"
                                id="text"
                                value={values.cta} 
                                onChange={(e) => setValues({ ...values, cta: e.target.value })}
                            />
                            <FormControlLabel
                                control={<ColorLensIcon sx={{m:1}}/>}
                                label="Choose your color"
                            />
                            <ColorPicker />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}