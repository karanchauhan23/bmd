import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Win() {
    return (
        <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                ></Box>
        <Card sx={{
            maxWidth: 555,
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    You won
                </Typography>
                <Typography variant="h2" component="div">
                1 prize of 10,000 points
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Go Back</Button>
            </CardActions>
        </Card>
        </Container>
    );
}
