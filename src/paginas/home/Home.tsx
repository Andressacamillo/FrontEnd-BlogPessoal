import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import './Home.css'

function Home() {
    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid item xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>



        </>
    )
}

export default Home;