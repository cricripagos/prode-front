import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

export default function MediaControlCard(props) {
    return (
        <Card sx={{ display: 'flex', padding:'20px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 50 }}
                    image={props.local.teams.away.logo}
                    alt="Live from space album cover"
                />
                <br />
                <CardMedia
                    component="img"
                    sx={{ width: 50 }}
                    image={props.local.teams.home.logo}
                    alt="Live from space album cover"
                />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {props.local.teams.away.name}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {props.local.teams.home.name}
                    </Typography>
                </CardContent>
            </Box>
            
        </Card>
    );
}
