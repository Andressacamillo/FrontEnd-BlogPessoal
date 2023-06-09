import React, { useEffect } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import './Home.css'
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { UserState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import { addToken } from "../../store/tokens/actions";


function Home() {
    let navigate = useNavigate();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            // alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])
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